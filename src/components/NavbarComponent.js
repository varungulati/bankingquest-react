import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import Logo from "./Logo";
import { Link } from 'expo-router';

function NavbarComponent() {
  return (
      <div className="col-xs-12 col-md-12 row">
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
          <div className="col-xs-8 col-md-1 ms-2">
            <Navbar.Brand href="/">
              <Logo/>
            </Navbar.Brand>
          </div>
          <div className="col-xs-4 col-md-0 pe-2">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          </div>
          <Navbar.Collapse className="col-xs-12 col-md-9" id="basic-navbar-nav">
            <Nav className="me-auto container">
              <NavDropdown className="ps-2" title="Courses"
                           id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Course 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Course 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Course 3</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="ps-2" href="#events">Events</Nav.Link>
              <Nav.Link className="ps-2" href="#testSeries">Test
                Series</Nav.Link>
              <Link href="/blog/1" className="ps-2 nav-link">Blogs</Link>
              <Nav.Link className="ps-2" href="#tutorials">Tutorials</Nav.Link>
            </Nav>
            <div className="col-md-1 px-2 col-xs-12 pb-2 pb-md-0">
              <LoginButton/>
            </div>
            <div className="col-md-1 px-2">
              <RegisterButton/>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default NavbarComponent;
