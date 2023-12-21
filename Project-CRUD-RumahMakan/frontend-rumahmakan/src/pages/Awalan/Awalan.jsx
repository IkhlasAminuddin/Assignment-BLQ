import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import LogoRestoran from "../../assets/Kompleks.png";

export default class Awalan extends React.Component {
  constructor() {
    super();
    this.state = {
        akses: ""
    };
  }

  componentDidMount() {
    localStorage.setItem("akses", "");
  }


  render() {
    return (
      <>
        <div style={{ marginLeft: "42%", marginTop: "10%" }}>
          <Card style={{ width: "18rem", backgroundColor: "brown" }}>
            <Card.Img
              variant="top"
              src={LogoRestoran}
              width={160}
              height={100}
            />
            <Card.Body style={{ textAlign: "center" , color:'white'}}>
              <Card.Title>Akses Masuk</Card.Title>
                <a href="/Admin" style={{color: 'white'}}>
              <Button variant="primary" style={{marginRight:'25px'}} >Admin
              </Button>
                </a>
                <a href="/Menu" style={{color: 'white'}}>
              <Button variant="primary" >Pelanggan
              </Button>
                </a>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
