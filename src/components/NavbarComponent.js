import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
  return (
      <div className="col-xs-12 col-md-12 row">
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
          <div className="col-xs-8 col-md-1 ms-2">
            <Navbar.Brand href="#home">
              <img
                  src="/public/assets/images/logo.png"
                  width="130"
                  height="40"
                  className="d-inline-block align-top me-lg-2"
                  alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </div>
          <div className="col-xs-4 col-md-0 pe-2">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          </div>
          <Navbar.Collapse className="col-xs-12 col-md-9" id="basic-navbar-nav">
            <Nav className="me-auto container">
              <NavDropdown className="ps-4" title="Courses"
                           id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Course 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Course 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Course 3</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="ps-4" href="#events">Events</Nav.Link>
              <Nav.Link className="ps-4" href="#testSeries">Test
                Series</Nav.Link>
              <Nav.Link className="ps-4" href="#blogs">Blogs</Nav.Link>
              <Nav.Link className="ps-4" href="#tutorials">Tutorials</Nav.Link>
            </Nav>
            <div className="col-md-1 px-2 col-xs-12 pb-2 pb-md-0">
              <Button className="float-right w-100"
                      href={"#"}>Login</Button>
            </div>
            <div className="col-md-1 px-2">
              <Button className="float-right w-100"
                      variant="success">Register</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default NavbarComponent;
