import React,{ Component } from 'react';
import PlayListCard from "./PlayListCard"
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getPlaylists } from '../actions/playListActions';
import PropTypes from "prop-types";

class PlayListCounter extends Component{
    render(){
        return(
            <div>
                <h2>10 Playlist</h2>
            </div>
        );
    }
}

class PlayTimeCounter extends Component{
    render(){
        return(
            <div>
                <h2>10 hours</h2>
            </div>
        );
    }
}

class UserName extends Component{
    render(){
        return(
            <div>
                <h1>My Playlists</h1>
            </div>
        );
    }
}

class Filter extends Component{
    render(){
        return(
            <div>
                <img />
                <input type="text" onKeyUp = {
                    event =>
                        this.props.onTextChange(event.target.value)
                } />
            </div>
        );
    }
}

class PlayListMain extends Component{

    componentDidMount(){
        this.props.getPlaylists();
    }

    state = {
        filterString: ''
    }

    render(){
        return(
            <div>
                <Button
                    onClick={() => window.location='http://localhost:5000/login'}
                >Sign in</Button>
                <UserName />
                <Container>
                    <PlayListCounter />
                    <PlayTimeCounter />
                </Container>
                <Filter
                    onTextChange={text => this.setState({filterString:text})}
                />
                <Container>
                <Row>
                    <PlayListCard />
                    <PlayListCard />
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