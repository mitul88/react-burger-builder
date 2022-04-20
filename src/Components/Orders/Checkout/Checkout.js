import React, { Component } from "react";
import {Button} from "reactstrap"; 
import { Navigate } from "react-router-dom";

import axios from "axios";

import {connect} from 'react-redux';

import env from "react-dotenv";


const firebase_api =env.API_URL;


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        canPurchase: state.canPurchase,
    }
}

class Checkout extends Component {
    
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",
        },
        navigateBack : null
    }
    
    goBack = () => {
        this.setState({navigateBack: "/"})
    }

    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values, 
                [e.target.name]: e.target.value,
            }
        })
    }

    submitHandler = () => {
        const order = {
            ingredients: this.props.ingredients,
            customerInfo: this.state.values,
            price: this.props.totalPrice,
            orderCreatedAt: new Date(),
        }
        axios.post(firebase_api+"/orders.json", order)
            .then(response=> console.log(response))
            .catch(err=> console.log(err))
        console.log(order);
    }

    render() {

        if (this.state.navigateBack && this.state.navigateBack === "/") {
            return <Navigate to={this.state.navigateBack} />
          }

        return (
            <div>

                <h4 style={{
                    border:"1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    Payment: {this.props.totalPrice} 
                </h4>

                <form style={{
                    border:"1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Your Address" onChange={(e)=>this.inputChangeHandler(e)}></textarea>
                    <br />
                    <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" onChange={(e)=>this.inputChangeHandler(e)} />
                    <br />
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e)=>this.inputChangeHandler(e)}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="bKash">bKash</option>
                    </select>
                    <br />
                    <Button 
                        style={{backgroundColor: "#d70f64"}} 
                        className="me-auto" 
                        onClick={this.submitHandler}
                        disabled={!this.props.canPurchase}>
                            Place Order
                        </Button>
                    <Button color="secondary" className="ms-1" onClick={this.goBack}>Cancel</Button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Checkout);