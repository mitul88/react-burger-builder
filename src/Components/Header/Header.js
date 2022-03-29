import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./Header.css";

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                    backgroundColor: "#d70f64",
                    height: "70px"
                }}>
                <NavbarBrand href='/' className="mr-auto ml-md-5 Brand"> Brand </NavbarBrand>
                <Nav>
                    <NavItem className="mr-md-5">
                        <NavLink href="#" className="NavLink">
                            Menu
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;