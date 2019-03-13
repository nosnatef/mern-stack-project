import uuid from 'uuid';
import { GET_SONGS, ADD_SONG, DELETE_SONG } from '../actions/types';

const initialState = {
    songs: [
        { id: uuid(), name: 'Adonis'},
        { id: uuid(), name: 'Megaburn'},
        { id: uuid(), name: 'Bohemian'}
    ]
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_SONGS:
            return{
                ...state
            };
        default:
            return state;
    }
}