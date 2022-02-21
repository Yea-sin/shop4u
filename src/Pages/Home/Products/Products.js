import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState("samsung");
  const handleBrand = (brand) => {
    setBrand(brand);
  };

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Brands</h2>
      <Row md={4} className="catagory-container mb-5 gy-4">
        <Col>
          <Button onClick={() => handleBrand("samsung")} variant="outline-info">
            Samsung
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("nokia")} variant="outline-info">
            Nokia
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("xiaomi")} variant="outline-info">
            Xiomi
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("realme")} variant="outline-info">
            Realme
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("samsung")} variant="outline-info">
            Samsung
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("nokia")} variant="outline-info">
            Nokia
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("xiaomi")} variant="outline-info">
            Xiomi
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("realme")} variant="outline-info">
            Realme
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("samsung")} variant="outline-info">
            Samsung
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("nokia")} variant="outline-info">
            Nokia
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("xiaomi")} variant="outline-info">
            Xiaomi
          </Button>{" "}
        </Col>
        <Col>
          <Button onClick={() => handleBrand("realme")} variant="outline-info">
            Realme
          </Button>{" "}
        </Col>
      </Row>
      <Row md={3}>
        {products
          .filter((item) => item.brand === brand)
          .map((product) => (
            <Col key={product.id}>
              <Card
                style={{
                  width: "18rem",
                  padding: "20px",
                  borderRadius: "5px",
                }}>
                <Card.Img
                  variant="top"
                  src={product.img}
                  style={{ height: "300px", padding: "20px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;
