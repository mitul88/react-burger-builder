import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";
import Order from "./Order/Order";

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr
    }
}

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    componentDidUpdate() {
        console.log(this.props)
    }
    
    render() {
        let orders = this.props.orders.map(order=> {
            console.log(order)
        })
        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);