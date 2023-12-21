import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LogoRestoran from "../../assets/Kompleks.png";
import { Col, Row, Button, Container } from "react-bootstrap";

export default class HeaderNav extends React.Component {
  constructor() {
    super();
    this.state = {
        status: ""
    };
  }


  render() {
    const {status} = this.state
    return (
      <>
        <Container style={{ backgroundColor: "gray" }}>
          <Row style={{ textAlign: "center" }}>
              <h1>Selamat Datang!</h1>
              <Col>
              <img src={LogoRestoran} ></img>
              </Col>
          </Row>
        </Container>
      </>
    );
  }
}
