import React, {Component} from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

import { connect } from "react-redux";
import {addIngredient, removeIngredient, updatePurchasable} from '../../redux/actionCreators'


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        canPurchase: state.canPurchase
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igType) => dispatch(addIngredient(igType)),
        removeIngredient: (igType) => dispatch(removeIngredient(igType)),
        updatePurchasable: () => dispatch(updatePurchasable)
    }
}

class BurgerBuilder extends Component {

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
        this.props.addIngredient(type);
    }

    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
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
                    <Burger ingredients={this.props.ingredients} />
                    <Controls 
                        ingredientAdded = {this.addIngredientHandle}
                        ingredientRemoved = {this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        canPurchase={this.props.canPurchase}
                    />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredients} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)