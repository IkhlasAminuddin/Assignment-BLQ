import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LogoRestoran from "../../assets/Kompleks.png";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoginModal = (props) => {
  const { show, close, openRegisModal } = props;

  return (
    <>
      <Modal show={show} onHide={close} style={{ marginTop: "8%" }}>
        <Modal.Header closeButton style={{ backgroundColor: "#cce5e5" }}>
          <Modal.Title>
            <img
              src={LogoRestoran}
              height={80}
              width={250}
              style={{ backgroundColor: "black" }}
            ></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "gray", color: "whitesmoke" }}>
          <Row style={{ marginBottom: "20px" }}>
            <Col sm={3}>
              <Form.Label>Username: </Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Username" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col sm={3}>
              <Form.Label>Password: </Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Password" />
            </Col>
          </Row>
          <p>
            Belum punya akun? {"      "}
            <Link onClick={openRegisModal} style={{ color: "#0402a8" }}>
              Buat akun
            </Link>
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#cce5e5" }}>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <a href="/Admin">
            <Button variant="success">Login </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
