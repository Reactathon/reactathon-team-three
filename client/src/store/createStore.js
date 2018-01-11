import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import profileReducer from '../reducers/profileReducer'
import songReducer from '../reducers/songReducer'


const rootReducer = combineReducers({user: userReducer, profile: profileReducer, songList: songReducer})

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger))
    return store
}