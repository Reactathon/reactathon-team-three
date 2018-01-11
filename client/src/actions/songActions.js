import { ADD_SONG } from './songActionTypes';

export const setSong = song => {
    return {
        type: ADD_SONG,
        song
    }
}

export const addSong = (song) => dispatch => {
    try {
        return dispatch(setSong(song))
    } catch (e) {
        // Error handle incorrect user password, locked out users etc...
    }
}