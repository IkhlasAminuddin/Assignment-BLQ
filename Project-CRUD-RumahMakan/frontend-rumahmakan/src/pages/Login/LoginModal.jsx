import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LogoRestoran from "../../assets/Kompleks.png";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoginModal = (props) => {
  const { show, close, openRegisModal } = props;

  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Row style={{ backgroundColor: "gray" }}>
              <img src={LogoRestoran} height={80} width={100}></img>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginBottom: "20px" }}>
            <Col sm={3}>
              <Form.Label>Username: </Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Username" />
            </Col>
          </Row>
          <Row style={{marginBottom:'20px'}}>
            <Col sm={3}>
              <Form.Label>Password: </Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Password" />
            </Col>
          </Row>
        <p>Belum punya akun?  {"      "} 
          <Link onClick={openRegisModal}>Buat akun</Link>
        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <a href="/Admin">
          <Button variant="success">
            Login{" "}
          </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
