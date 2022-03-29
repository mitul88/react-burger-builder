import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <div>
            <Navbar style={{
                    backgroundColor: "#d70f64",
                    height: "70px"
                }}>
                <NavbarBrand href='/' className="mr-auto ml-md-5"> Brand </NavbarBrand>
                <Nav>
                    <NavItem className="mr-md-5">
                        <NavLink href="#">
                            Menu
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;