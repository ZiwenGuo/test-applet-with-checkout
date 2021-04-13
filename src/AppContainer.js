import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItemCount: null,
      checkoutUrl: null,
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <Form.Group controlId="cartItemCount">
                <Form.Label>Cart Item Count</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cart item count"
                  onChange={(e) => {
                    this.setState({
                      cartItemCount: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Button
                variant="primary"
                onClick={(e) => {
                  console.log(this.state.cartItemCount);
                }}
              >
                Set Cart Item Count
              </Button>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <Row>
            <Col></Col>
            <Col xs={6}>
              <Form.Group controlId="checkoutUrl">
                <Form.Label>Checkout URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Checkout url"
                  onChange={(e) => {
                    this.setState({
                      checkoutUrl: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Button
                variant="primary"
                onClick={(e) => {
                  console.log(this.state.checkoutUrl);
                }}
              >
                {" "}
                Set Checkout URL
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default AppContainer;
