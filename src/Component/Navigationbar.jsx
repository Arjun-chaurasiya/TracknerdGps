import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Col,
  Row
} from 'reactstrap';
import '../Component/Navbar.css'
function Navbar1() {
    
    return (
    
            <Navbar expand="md" color="light" light expand="md" className="">
              <NavbarBrand style={{ width: `100%`, maxWidth: `800px` }} className="mr-auto">
            <img className="logo" alt="Tracknerd Logo" src='./logo.png'/>
        </NavbarBrand>
                  <Nav className="mr-auto" navbar>
                  <NavItem>
                      <NavLink className="linkcolor" href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="linkcolor" href="/">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="linkcolor" href="/">Product And Services</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="linkcolor" href="/">Research and Innovation</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="linkcolor" href="/">Careers</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="linkcolor" href="/"> FAQs</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="linkcolor" href="/">Contact Us</NavLink>
                    </NavItem>
                  </Nav>
              </Navbar>
    );
  }
  
  export default Navbar1;