import uuid from 'uuid';
import { GET_SONGS, ADD_SONG, DELETE_SONG, SONGS_LOADING } from '../actions/types';

const initialState = {
    songs: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_SONGS:
            return{
                ...state,
                songs: action.payload,
                loading: false
            };
        case DELETE_SONG:
            return{
                ...state,
                songs: state.songs.filter(song => song.id !== action.payload)
            };
        case ADD_SONG:
            return {
                ...state,
                songs: [action.payload, ...state.songs]
            };
        case SONGS_LOADING:
            return{
                ...state,
                loading: true
            };
        default:
            return state;
    }
}