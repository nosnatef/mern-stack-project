import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransistion, TransistionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getSongs, deleteSong } from '../actions/songActions';

import PropTypes from "prop-types";

class PlayList extends Component {

    componentDidMount(){
        this.props.getSongs();
    }

    onDeleteClick = (id) => {
        this.props.deleteSong(id);
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
                                onClick={this.onDeleteClick.bind(this,id)}
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

const mapStateToProps = (state) => ({
    song: state.song
});

export default connect(mapStateToProps, {getSongs, deleteSong} )(PlayList);