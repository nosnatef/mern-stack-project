import { GET_SONGS, ADD_SONG, DELETE_SONG } from './types';

export const getSongs = () => {
    return{
        type: GET_SONGS
    };
};