import React from "react";

import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "./Auth/Auth";

import { Route, Routes } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Main = props => {

    let routes = null;

    if (props.token===null) {
        routes = (
            <Routes>
                <Route path="/login" exact element={<Auth />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path="/" exact element={<BurgerBuilder />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        )
    }
    return (
        <div>
            <Header />
            <div className="container">
                {routes}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Main);