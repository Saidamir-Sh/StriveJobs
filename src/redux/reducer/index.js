import { ADD_TO_CART, REMOVE_FROM_CART } from "../action";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default mainReducer