import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    
    render() {
        
    }
}

export default connect(null, mapDispatchToProps)(Orders);