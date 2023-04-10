import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo-2.png";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../App.css";

export function DesktopNavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
          <Nav.Link className="nav-font ms-3" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-font ms-3" as={Link} to="/shop">
            Shop
          </Nav.Link>
          <Nav.Link className="nav-font ms-3" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link className="nav-font ms-3" as={Link} to="/product">
            Product
          </Nav.Link>
          <Nav.Link className="nav-font ms-3" as={Link} to="/logout">
            Logout
          </Nav.Link>
        </Nav>

        <Form className="d-flex">
          <SearchBar />
        </Form>
        <Nav className="px-3">
          <Nav.Link as={Link} to="/signin">
            <i
              class="bi bi-person fw-black"
              style={{ fontSize: "2rem", color: "black" }}
            ></i>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <i
              class="bi bi-bag fw-black"
              style={{ fontSize: "1.9rem", color: "black" }}
            ></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export function PhoneNavBar() {
  return (
    <Navbar className="fixed-bottom bg-blur">
      <Container>
        <Nav className="my-2 my-lg-0 w-100 justify-content-between align-items-center">
          <Nav.Link className="nav-font" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            <i
              class="bi bi-person fw-black"
              style={{ fontSize: "2rem", color: "black" }}
            ></i>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <i
              class="bi bi-bag fw-black"
              style={{ fontSize: "1.9rem", color: "black" }}
            ></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
