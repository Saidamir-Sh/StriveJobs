export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const FETCH_JOBS = 'FETCH_JOBS'

export const addToCartAction = (job) => ({
    type: ADD_TO_CART,
    payload: job,
})

export const removeFromCart = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index,
})

export const fetchJobs = (url, query) => {
    return async (dispatch, getState) => {
        try {
            if (query = '') {
                const response = await fetch(url+'developer'+'&limit=30')
                if(response.ok) {
                    const data = await response.json()
                    dispatch({
                        type: FETCH_JOBS,
                        payload: data,
                    })
                }
            } else {
                const response = await fetch(url+query+'&limit=30')
                if(response.ok) {
                    const data = await response.json()
                    // console.log(data)
                    dispatch({
                        type: FETCH_JOBS,
                        payload: data,
                    })
                }               
            }
        } catch (error) {
            console.log(error)
        }
    }
}