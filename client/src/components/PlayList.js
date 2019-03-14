import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
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
                <ListGroup>
                    {songs.map(({_id, name}) => (
                        <ListGroupItem>
                            {name}
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={this.onDeleteClick.bind(this,_id)}
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