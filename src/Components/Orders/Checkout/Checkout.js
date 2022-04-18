import React, { Component } from "react";
import {Button} from "reactstrap"; 
import { Navigate } from "react-router-dom";

export class Checkout extends Component {
    
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

    render() {

        if (this.state.navigateBack && this.state.navigateBack === "/") {
            return <Navigate to={this.state.navigateBack} />
          }

        return (
            <div>
                <form>
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Your Address"></textarea>
                    <br />
                    <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" />
                    <br />
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="bKash">bKash</option>
                    </select>
                    <br />
                    <Button style={{backgroundColor: "#d70f64"}} className="me-auto" onClick={this.goBack}>Place Order</Button>
                    <Button color="secondary" className="ms-1" onClick={this.goBack}>Cancel</Button>
                </form>
            </div>
        )
    }
}

export default Checkout;