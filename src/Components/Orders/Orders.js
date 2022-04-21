import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";

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
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);