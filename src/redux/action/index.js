export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCartAction = (job) => ({
    type: ADD_TO_CART,
    payload: job,
})

export const removeFronCart = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index,
})