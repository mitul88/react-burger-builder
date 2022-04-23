import React from "react";

import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "./Auth/Auth";

import { Route, Routes, Navigate } from "react-router-dom";

import { connect } from "react-redux";

import { authCheck } from "../redux/authActionCreators";

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}

const Main = props => {

    let routes = null;

    if (props.token===null) {
        routes = (
            <Routes>
                <Route path="/login" exact element={<Auth />} />
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path="/" exact element={<BurgerBuilder />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);