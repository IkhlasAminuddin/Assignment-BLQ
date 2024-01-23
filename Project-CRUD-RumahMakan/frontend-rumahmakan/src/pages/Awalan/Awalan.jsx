import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import LogoRestoran from "../../assets/Kompleks.png";
import BackgroundImage from "../../assets/hidangan.png"
import { LoginModal } from "../Login/LoginModal";
import { SignUpModal } from "../Register/SignUpModal";
import Swal from "sweetalert2"

export default class Awalan extends React.Component {
  constructor() {
    super();
    this.state = {
      akses: "",
      showLogin: false,
      showRegis: false,

    };
  }

  componentDidMount() {
    localStorage.setItem("akses", "");
  }

  openLoginModal = () => {
    this.setState({
      showLogin: true,
    });
  };

  closeLoginModal = () => {
    this.setState({
      showLogin: false,
    });
  };

  openRegisModal = () => {
    this.setState({
      showRegis: true,
      showLogin: false
    })
  }
  closeRegisModal = () => {
    this.setState({
      showRegis: false,
    })
  }

  popUpAlert = () => {
    this.setState({
      showRegis: false,
    })
    Swal.fire({
      //allert
      title: "Success!",
      text: "Akun berhasil dibuat!",
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  render() {
    const { showLogin, showRegis } = this.state;

    return (
      <>
      <div>
        <img src={BackgroundImage} style={{width: '1980px', height:'1020px', zIndex:-1, marginLeft:'-2%'}}></img>
      </div>
        <div
          style={{
            marginTop: "-40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            
          }}
        >
          <Card style={{ width: "30rem", height:'23rem', backgroundColor: "brown",position:'relative', 
             }}>
            <Card.Img
              variant="top"
              src={LogoRestoran}
              width={160}
              height={160}
            />
            <Card.Body style={{ textAlign: "center", color: "white", justifyContent: 'center', alignItems: 'center', marginTop: "10%"  }}>
              <Row>
              <Card.Title>Masuk sebagai?</Card.Title>
              </Row>
              <Row style={{marginTop: "10%"}}>
                <Col>
              <Button
                onClick={this.openLoginModal}
                variant="primary"
                style={{ width: "70%" }}
              >
                Admin
              </Button>
              </Col>
              <Col>
              <a href="/Menu" style={{ color: "white" }}>
                <Button variant="primary" style={{width: "70%"}}>Pelanggan</Button>
              </a>
              </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <LoginModal show={showLogin} close={this.closeLoginModal} openRegisModal = {this.openRegisModal}/>
        <SignUpModal show={showRegis} close={this.closeRegisModal} popUpAlert = {this.popUpAlert}/>
      </>
    );
  }
}
