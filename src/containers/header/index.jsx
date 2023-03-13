import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar
      bg="white"
      variant="dark"
      expand="lg"
      className="pt-2 d-flex align-items-center "
    >
      <Container fluid>
        <Row className="w-100">
          <Col className="d-flex justify-content-start align-items-center">
            <h6 className="ps-5 py-2 mb-0 text-secondary">
              Yayasan Bahtera Dwipa Abadi
            </h6>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
