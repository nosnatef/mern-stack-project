import axios from 'axios';
import { GET_PLAYLISTS, PLAYLISTS_LOADING } from './types';

export const getPlaylists = () => dispatch => {
    dispatch(setPlaylistsLoading());
    axios
        .get('/api/songs')
        .then(res => 
            dispatch({
                type: GET_PLAYLISTS,
                payload: res.data
            })
        );
};

export const setPlaylistsLoading = () => {
    return {
        type: PLAYLISTS_LOADING
    };
}