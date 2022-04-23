import React, { Component } from "react";
import { useNavigate } from "react-router";

import { connect } from "react-redux";



import { logout } from "../../redux/authActionCreators";

const mapDispatchToProps = dispatch => {
    return {
        logout: ()=> dispatch(logout()),
    }
}

class Logout extends Component {
    render() {
        const navigate = useNavigate();

        return navigate("./", { replace: true })
    }
}

export default connect(null, mapDispatchToProps)(Logout);