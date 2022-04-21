import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}

class Orders extends Component {
    render() {
        
    }
}

export default Orders;