import React, {Component} from "react";
import Burger from "./Burger/Burger";

export default class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {type: 'salad', amount: 1},
            {type: 'meat', amount: 2},
            {type: 'cheese', amount: 1},
        ]
    }

    render() {
        return (
            <div>
                <Burger props={this.state.ingredients} />
            </div>
        )
    }
}