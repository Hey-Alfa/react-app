import { Col, Row, Card } from "react-bootstrap";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";

export default function ProductCard() {
  return (
    <Row className="container mx-auto my-4 fluid">
      <Col>
        <Card style={{ width: "20rem", border: "none" }} className="m-auto">
          <Card.Img variant="top" src={product1} className="p-2" />

          <Card.Link href="#" className="text-center text-decoration-none">
            Best Seller
          </Card.Link>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "20rem", border: "none" }} className="m-auto">
          <Card.Img variant="top" src={product2} className="p-2" />

          <Card.Link href="#" className="text-center text-decoration-none">
            New Arrival
          </Card.Link>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "20rem", border: "none" }} className="m-auto">
          <Card.Img variant="top" src={product3} className="p-2" />
          <Card.Link href="#" className="text-center text-decoration-none">
            Single Product
          </Card.Link>
        </Card>
      </Col>
    </Row>
  );
}
