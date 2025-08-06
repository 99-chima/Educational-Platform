import academiaLogo from "./images/logo.jpeg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "./CardContext";
import { Navbar as BootstrapNavbar, Nav, Container, Badge, Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaHome } from "react-icons/fa";
const NavBar = () => {
  const { totalItems } = useContext(CardContext);
  return (
    <BootstrapNavbar
      expand="lg"
      className="shadow-sm py-2 rounded-bottom fixed-top pb-2"
      style={{ background: "linear-gradient(145deg, #4b6cb7, #182848)" }}
    >
      <Container>
        <Row className="w-100 align-items-center">
          <Col>
            <img src={academiaLogo} className="img-fluid w-50 h-50" alt="Academia Logo" />
          </Col>
          <Col>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="px-3 text-light d-flex align-items-center gap-1 fw-medium"
                >
                  <FaHome />
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/checkout"
                  className="px-3 text-light d-flex align-items-center gap-1 fw-medium position-relative"
                >
                  <FaShoppingCart />
                  Cart
                  {totalItems > 0 && (
                    <Badge
                      pill
                      bg="danger"
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {totalItems}
                    </Badge>
                  )}
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="btn btn-outline-light ms-3 text-white bg-primary fw-bold">
    Login / Register
  </Nav.Link>
              </Nav>
            </BootstrapNavbar.Collapse>
          </Col>
        </Row>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavBar;