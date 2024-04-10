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
                <Link href="/blog/1" className="dropdown-item">Course 1</Link>
                <Link href="/blog/1" className="dropdown-item">Course 2</Link>
                <Link href="/blog/1" className="dropdown-item">Course 3</Link>
                <NavDropdown.Divider/>
                <Link href="/blog/1" className="dropdown-item">Course 4</Link>
              </NavDropdown>
              <Link href="/blog/1" className="ps-2 nav-link">Events</Link>
              <Link href="/blog/1" className="ps-2 nav-link">Test Series</Link>
              <Link href="/blog/1" className="ps-2 nav-link">Blogs</Link>
              <Link href="/blog/1" className="ps-2 nav-link">Tutorials</Link>
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
