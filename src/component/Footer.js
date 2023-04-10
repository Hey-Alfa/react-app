import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Navbar>
      <Container>
        <Nav className="w-100 justify-content-between align-items-center">
          <Nav.Link as={Link} to="/">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            Location
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            About Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
