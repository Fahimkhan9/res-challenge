import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavigationBar.css";
import NavLogo from "../../images/Group 86.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="ml-5">
          <img src={NavLogo} alt="navlogo" className="navlogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="ml-5">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="ml-5">
              About
            </Nav.Link>
            <Nav.Link href="#" className="ml-5">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="ml-5">
              Pricing
            </Nav.Link>
            <Nav.Link href="#" className="ml-5">
              Our Team
            </Nav.Link>
            <button className="btn btn-primary btn-radius">Contact us</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
