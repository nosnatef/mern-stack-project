import { GET_SONGS, ADD_SONG, DELETE_SONG } from './types';

export const getSongs = () => {
    return{
        type: GET_SONGS
    };
};

export const deleteSong = (id) => {
    return{
        type: DELETE_SONG,
        payload: id
    };
};