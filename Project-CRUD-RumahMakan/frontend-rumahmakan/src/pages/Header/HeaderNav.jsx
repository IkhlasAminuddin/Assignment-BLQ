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
          <Row style={{ textAlign: "center" , backgroundColor:"grey", borderBottom:'10px solid black'}}>
              <Col sm={2}>
              <img src={LogoRestoran} width={200} height={130} ></img>
              </Col>
              <Col sm={5} style={{textAlign:'right', paddingTop:'4%'}}>
              <a href="/About" style={{fontSize:'30px', background:'none', borderBottom:'4px solid black', color: 'black', textDecoration:'none'}}>Tentang</a>
              </Col>
              <Col sm={1} style={{textAlign:'center', paddingTop:'4%'}}>
              <a href="/Menu" style={{fontSize:'30px', background:'none', borderBottom:'4px solid black', color: 'black', textDecoration:'none'}}>Menu</a>
              </Col>
              <Col style={{textAlign:'left', paddingTop:'4%'}}>
              <a href="/Location" style={{fontSize:'30px', background:'none', borderBottom:'4px solid black', color: 'black', textDecoration:'none'}}>Lokasi</a>
              </Col>
          </Row>
      </>
    );
  }
}
