import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <div>
            <Navbar>
                <NavbarBrand href='/'> Brand </NavbarBrand>
                <Nav>
                    <NavItem>
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