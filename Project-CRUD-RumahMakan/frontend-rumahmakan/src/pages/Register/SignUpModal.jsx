import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LogoRestoran from "../../assets/Kompleks.png";
import { Row, Col, Form } from "react-bootstrap";

export const SignUpModal = (props) => {
    const {show, close, popUpAlert} = props

  return (
    <>
      <Modal show={show} onHide={close} style={{marginTop:'8%'}}>
        <Modal.Header closeButton style={{backgroundColor:'#cce5e5'  , borderStyle:'solid',borderWidth:'5px', borderColor:'white white black white'}}>
          <Modal.Title >
            <Row style={{ backgroundColor: "gray"}}>
              <img src={LogoRestoran} height={80} width={100}></img>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'gray', color:'whitesmoke'}}>
            <Row>
                <Form.Label>Masukkan email anda:</Form.Label>
            </Row>
            <Form.Control placeholder="Email"/>
          <Row style={{marginTop:'15px'}}>
              <Form.Label>Masukkan username yang diinginkan: </Form.Label>
          </Row>
              <Form.Control placeholder="Username" />
          <Row style={{marginTop:'15px'}}>
              <Form.Label>Masukkan password yang diinginkan: </Form.Label>
          </Row>
              <Form.Control placeholder="Password" />
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'#cce5e5'}}>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
            <Button onClick={popUpAlert} variant="success">Buat Akun</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
