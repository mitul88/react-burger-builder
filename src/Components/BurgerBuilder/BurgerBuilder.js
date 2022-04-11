import React, {Component} from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

import { connect } from "react-redux";
import {addIngredient, removeIngredient, updatePurchasable} from '../../redux'


export default class BurgerBuilder extends Component {

    state = {
        modalOpen: false,
    }

    updateCanPurchase = ingredients => {
        const sum = ingredients.reduce((sum, elem)=> {
            return sum + elem.amount;
        }, 0);
        this.setState({ canPurchase: sum > 0 })
    }

    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        for (let item of ingredients) {
            if(item.type === type) item.amount++
        }
        this.setState({ ingredeints: ingredients, totalPrice: newPrice })
        this.updateCanPurchase(ingredients);
    }

    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        for (let item of ingredients) {
            if(item.type === type ){ 
                if(item.amount <= 0) 
                return;
                item.amount--
            }
        }
        this.setState({ingredeints: ingredients, totalPrice: newPrice})
        this.updateCanPurchase(ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.state.ingredients} />
                    <Controls 
                        ingredientAdded = {this.addIngredientHandle}
                        ingredientRemoved = {this.removeIngredientHandle}
                        price={this.state.totalPrice}
                        toggleModal={this.toggleModal}
                        canPurchase={this.state.canPurchase}
                    />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.state.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success">Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}