import { combineReducers } from 'redux';
import songReducer from './songReducer';
import playListReducer from "./playListReducer";

export default combineReducers({
    song: songReducer,
    playlist: playListReducer
});