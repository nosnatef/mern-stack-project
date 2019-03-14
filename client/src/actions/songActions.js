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

export const addSong = song => dispatch => {
    axios
        .post('/api/songs', song)
        .then(res => dispatch(
            {
                type: ADD_SONG,
                payload: res.data
            }
        ))
};

export const deleteSong = id => dispatch => {
    axios.delete(`/api/songs/${id}`).then(
        res => dispatch({
            type:DELETE_SONG,
            payload: id
        })
    )
};

export const setSongsLoading = () => {
    return {
        type: SONGS_LOADING
    };
}