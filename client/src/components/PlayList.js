import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransistion, TransistionGroup } from 'react-transition-group';
import uuid from 'uuid';

class PlayList extends Component {
    state = {
        songs: [
            { id: uuid(), name: 'Adonis'},
            { id: uuid(), name: 'Megaburn'},
            { id: uuid(), name: 'Bohemian'}
        ]
    }

    render() {
        const { songs } = this.state;
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

export default PlayList;