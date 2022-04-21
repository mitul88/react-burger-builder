import axios from 'axios';

import * as actionTypes from './actionTypes';

import env from 'react-dotenv';

const FIREBASE_API = env.API_URL;



export const addIngredient = igType => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igType
    }
}

export const removeIngredient = igType => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igType
    }
}

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    }
}

export const orderLoadFaild = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED,
    }
}

export const fetchOrders = () => dispatch => {
    axios.get(FIREBASE_API+"/orders.json")
        .then(response=> {
            dispatch(loadOrders(response.data));
        })
        .catch(err=> {
            dispatch(orderLoadFaild())
        })
}