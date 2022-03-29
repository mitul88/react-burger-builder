import React from "react";
import Ingredient from "../Ingredient/Ingredient";

const Burger = props => {
    let ingredientArr = props.ingredients.map(item=> {
        let amountArr = [...Array(item.amount).keys()];
    })
    return (
        <div>
            <Ingredient type="bread-top" />
            <Ingredient type="cheese" />
            <Ingredient type="salad" />
            <Ingredient type="meat" />
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger;