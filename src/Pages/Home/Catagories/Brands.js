import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Brands.css";

const Brands = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Brands</h2>
      <Row md={4} className="catagory-container gy-4">
        <Col>
          <Button variant="outline-info">Samsung</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Nokia</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Xiomi</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Realme</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Samsung</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Nokia</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Xiomi</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Realme</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Samsung</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Nokia</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Xiomi</Button>{" "}
        </Col>
        <Col>
          <Button variant="outline-info">Realme</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Brands;
