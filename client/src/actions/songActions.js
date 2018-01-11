import { ADD_SONG, SONG_LIST } from './songActionTypes';


export const setSong = song => {
    return {
        type: ADD_SONG,
        song
    }
}

export const getAllSongs = () => {
    return {
        type: SONG_LIST
    }
}

export const addSong = (song) => dispatch => {
    try {
        return dispatch(setSong(song))
    } catch (e) {
        // Error handle incorrect user password, locked out users etc...
    }
}

export const getSongs = () => dispatch => {
    try {
        return dispatch(getAllSongs())
    } catch (e) {
        // Error handle incorrect user password, locked out users etc...
    }
}