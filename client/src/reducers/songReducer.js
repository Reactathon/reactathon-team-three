import { ADD_SONG, SONG_LIST } from './../actions/songActionTypes';


const songReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_SONG:
            return [...state, action.song]
        case SONG_LIST:
            return state
        default:
            return state
    }
}

export default songReducer