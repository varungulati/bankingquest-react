import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
              src="/public/assets/images/logo.png"
              width="130"
              height="40"
              className="d-inline-block align-top me-lg-2"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown  title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Course 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Course 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Course 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#testSeries">Test Series</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#tutorials">Tutorials</Nav.Link>
          </Nav>
            <Button className="float-right me-2 col-md-1" href={"#"}>Login</Button>{'   '}

            <Nav.Link href="#" disabled></Nav.Link>
          <Button className="float-right me-2 col-md-1" variant="success">Register</Button>{'   '}

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarComponent;
