import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransistion, TransistionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getSongs } from '../actions/songActions';

import PropTypes from "prop-types";

class PlayList extends Component {

    componentDidMount(){
        this.props.getSongs();
    }

    render() {
        const { songs } = this.props.song;
        return(
            <Container>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state => ({
                                songs: [...state.songs, { id:uuid() ,name}]
                            }))
                        }
                    }}
                >Add Song</Button>
                <ListGroup>
                    {songs.map(({id, name}) => (
                        <ListGroupItem>
                            {name}
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    this.setState(state => ({
                                        songs: state.songs.filter(song => song.id !== id)
                                    }));
                                }}
                            >
                            &times;
                            </Button>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

PlayList.propTypes = {
    getSongs: PropTypes.func.isRequired,
    song: PropTypes.object.isRequired
}

const maoStateToProps = (state) => ({
    song: state.song
});

export default connect(maoStateToProps, {getSongs} )(PlayList);