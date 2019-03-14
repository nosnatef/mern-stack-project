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
}

export default connect()(SongModal);