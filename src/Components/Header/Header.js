import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from '../../assets/logo.png';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                    backgroundColor: "#d70f64",
                    height: "70px"
                }}>
                <NavbarBrand href='/' className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                <Nav>
                    <NavItem className="mr-md-5">
                        <NavLink exact="true" to="/" className="NavLink">
                            BurgerBuilder
                        </NavLink>
                    </NavItem>
                    <NavItem className="mr-md-5">
                        <NavLink to="/orders" className="NavLink">
                            Orders
                        </NavLink>
                    </NavItem>
                    <NavItem className="mr-md-5">
                        <NavLink to="/login" className="NavLink">
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header);