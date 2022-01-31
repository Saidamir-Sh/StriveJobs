import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_JOBS } from "../action";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                saved: {
                    ...state.saved,
                    jobs: [...state.saved.jobs, action.payload],
                }
            }
            case REMOVE_FROM_CART:
                return {
                    ...state,
                    saved: {
                        ...state.saved,
                        jobs: state.saved.jobs.filter((book, i) => i !== action.payload),
                    }
                }
            case FETCH_JOBS: 
                return {
                    ...state,
                    jobsArr: {
                        data: action.payload,
                        isLoading: false,
                    }
                }
        default:
            return state
    }
}

export default mainReducer