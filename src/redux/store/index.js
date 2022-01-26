import { createStore } from 'redux'

export const initialState = {
    saved: {
        jobs: [],
    },
}

let configureStore = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore