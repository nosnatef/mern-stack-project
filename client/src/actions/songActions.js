import axios from 'axios';
import { GET_SONGS, ADD_SONG, DELETE_SONG, SONGS_LOADING } from './types';

export const getSongs = () => dispatch => {
    dispatch(setSongsLoading());
    axios
        .get('/api/songs')
        .then(res => 
            dispatch({
                type: GET_SONGS,
                payload: res.data
            })
        );
};

export const addSong = (song) => {
    return{
        type: ADD_SONG,
        payload: song
    };
};

export const deleteSong = (id) => {
    return{
        type: DELETE_SONG,
        payload: id
    };
};

export const setSongsLoading = () => {
    return {
        type: SONGS_LOADING
    };
}