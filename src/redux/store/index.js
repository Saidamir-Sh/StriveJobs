import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import mainReducer from '../reducer'
import thunk from 'redux-thunk'

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    saved: {
        jobs: [],
    },
}

let configureStore = createStore(
    mainReducer,
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore