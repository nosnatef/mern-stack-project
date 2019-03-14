import React, { Component } from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { connect } from 'react-redux';
import { addSong } from "../actions/songActions";

class SongModal extends Component{
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newSong = {
            name: this.state.name
        }

        //Add item
        this.props.addSong(newSong);

        //Close Modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Song
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                <ModalHeader toggle={this.toggle}>
                    Add To Playlist
                </ModalHeader>

                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="song">
                                Song
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                id="song"
                                placeholder="Add song"
                                onChange={this.onChange}
                            />
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem'}}
                                block
                            >
                                Add Song
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>

                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    song: state.song
});

export default connect(mapStateToProps, {addSong})(SongModal);