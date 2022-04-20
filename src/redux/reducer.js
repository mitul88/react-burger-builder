import * as actionTypes from './actionTypes';


const INGREDIENT_PRICE = {
    salad: 20,
    cheese: 40,
    meat: 90
}


const INITIAL_STATE = {
    ingredients: [
        {type: 'salad', amount: 0},
        {type: 'meat', amount: 0},
        {type: 'cheese', amount: 0},
    ],
    totalPrice: 80,
    canPurchase: false,
}

export const reducer = (state=INITIAL_STATE, action) => {
    const ingredients = [...state.ingredients];

    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            for (let item of ingredients) {
                if(item.type === action.payload) item.amount++
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload]
            }

        case actionTypes.REMOVE_INGREDIENT:
            for (let item of ingredients) {
                if(item.type === action.payload ){ 
                    if(item.amount <= 0) 
                    return state;
                    item.amount--
                }
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload]
            }

        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredients.reduce((sum, elem)=> {
                return sum + elem.amount;
            }, 0)
            return {
                ...state,
                canPurchase: sum > 0,
            }

        case actionTypes.RESET_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    {type: 'salad', amount: 0},
                    {type: 'meat', amount: 0},
                    {type: 'cheese', amount: 0},
                ],
                totalPrice: 80,
                canPurchase: false,
            }
            
        default:
            return state;
    }
}