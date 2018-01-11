import { ADD_SONG, ADD_INSTRUMENT } from './songActionTypes';


export const setSong = song => {
    return {
        type: ADD_SONG,
        song
    }
}

export const setInstrument = inst => {
    return {
        type: ADD_INSTRUMENT,
        inst
    }
}

export const addSong = (song) => dispatch => {
    try {
        return dispatch(setSong(song))
    } catch (e) {
        // Error handle incorrect user password, locked out users etc...
    }
}

export const addInstrument = (inst) => dispatch => {
    try {
        return dispatch(setInstrument(inst))
    } catch (e) {
        // Error handle incorrect user password, locked out users etc...
    }
}