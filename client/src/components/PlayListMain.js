import React,{ Component } from 'react';
import PlayListCard from "./PlayListCard"
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getPlaylists } from '../actions/playListActions';
import PropTypes from "prop-types";
import querystring from 'query-string';

class PlayListCounter extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.length} Playlist</h2>
            </div>
        );
    }
}

class PlayTimeCounter extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.time} hours</h2>
            </div>
        );
    }
}

class UserName extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}'s Playlists</h1>
            </div>
        );
    }
}

class Filter extends Component{
    render(){
        return(
            <div>
                <img />
                <input type="text" placeholder="search playlist" onKeyUp = {
                    event =>
                        this.props.onTextChange(event.target.value)
                } />
            </div>
        );
    }
}

class PlayListMain extends Component{

    state = {
        isLogin : this.props.isLogin
    }

    componentDidMount(){
        
        let parsed = querystring.parse(window.location.search);
        let accessToken = parsed.access_token;

        //get meta data here
        fetch('https://api.spotify.com/v1/me', {
            headers: {'Authorization' : 'Bearer ' + accessToken
                     }
        }).then((res) => res.json()
        ).then(
            data => {
                this.setState(
                    {
                        apiData:{
                            name:data.display_name
                        }
                    }
                )
            }
        )

        fetch('https://api.spotify.com/v1/me/playlists?limit=50',{
            headers:{'Authorization': 'Bearer ' + accessToken}
        }).then((res)=>res.json()
        ).then(data=>{
            console.log(data);
            let playlists = data.items;
            if(!playlists){
                return [];
            }
            else{
                //get rid of the button
                this.setState({
                    isLogin:true
                });
            }
            let trackDataPromises = playlists.map(playlist => {
                let responsePromise = fetch(playlist.tracks.href, {
                    headers: {'Authorization': 'Bearer ' + accessToken}
                })
                let trackDataPromise = responsePromise
                    .then(response => response.json());
                return trackDataPromise;
            });
            let allTracksDataPromises = 
                Promise.all(trackDataPromises);

            let playlistsPromise = allTracksDataPromises.then(trackDatas => {
                trackDatas.forEach((trackData, i) => {
                    playlists[i].trackDatas = trackData.items.map(item => item.track);
                });
                return playlists
            });
            return playlistsPromise;
            
        })
        .then(data => {
            this.setState({
                playlistData: data
            })
    });
    }

    state = {
        apiData: {},
        filterString: ''
    }

    render(){
        //delete the button when logged in
        let button;
        console.log(this.props.isLogin);
        if(this.state.isLogin){
            button = <div></div>;
        }
        else{
            button = <Button
            onClick={() => window.location= window.location.href.includes('localhost')
                ?'http://localhost:5000/login'
                : 'https://guzspotify.herokuapp.com/login'
            }
            >Sign in</Button>;
        }

        let playlistToRender = this.state.apiData && this.state.playlistData ? this.state.playlistData.filter(item => {
            let matchTitle = item.name.toLowerCase().includes(
            this.state.filterString.toLowerCase());
            let matchTrack = item.trackDatas.find(song => song.name.toLowerCase().includes(
                this.state.filterString.toLowerCase()
            ));
            return matchTitle || matchTrack;
        })
            : []
        let playlistCount = playlistToRender.length;
        let playlistTotalTime = playlistToRender.map(playlist => {
           let trackTotalTime = playlist.trackDatas.map(track => {
               return track.duration_ms;
           });
           let trackTime = trackTotalTime.reduce((a,b) => a+b);
           return trackTime;
        }).reduce((a,b) => a+b,0);
        let finalTime =(playlistTotalTime / 3600000).toFixed(2);
        console.log(playlistToRender);
        return(
            <div>
                {button}
                <UserName name={this.state.apiData.name} />
                <Container>
                    <ul>
                        <li><PlayListCounter length={playlistCount} /></li>
                        <li><PlayTimeCounter time={finalTime}/></li>
                    </ul>
                </Container>
                <Filter
                    onTextChange={text => this.setState({filterString:text})}
                />
                <Container>
                <Row>
                {playlistToRender.map(playlist =>
                    <PlayListCard playlist={playlist} />    
                )}
                </Row>
                </Container>
            </div>
        );
    }
}

PlayListMain.propTypes = {
    getPlaylists: PropTypes.func.isRequired,
    playlist: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    playlist: state.playlist
});

export default connect(mapStateToProps, {getPlaylists} )(PlayListMain);