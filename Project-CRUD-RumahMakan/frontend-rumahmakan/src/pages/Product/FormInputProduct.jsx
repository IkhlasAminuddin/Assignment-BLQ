import React from "react";
import { Form, Button, Col, Row, Modal } from "react-bootstrap";

export const FormInputProduct = (props) => {
  const { show, close, handleChange, saveHandler, type, productModel, editHandler, deleteHandler, activeHandler } = props;
  
  var header;
  var body;
  var footer;
  
  if (type === "add"){
    header = (<Modal.Header closeButton>
        <Modal.Title>Tambah Product</Modal.Title>
      </Modal.Header>)
    body = (
        <Modal.Body>
            <Row>
              <Form.Label>Nama*</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Input Nama Product"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Jenis</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="jenis"
                  placeholder="Input Jenis Makanan (Makanan Berat, Minuman, Tambahan,...)"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Harga</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  name="harga"
                  placeholder="Input Harga"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Stock</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  name="stock"
                  placeholder="Input Stock"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Deskripsi</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="deskripsi"
                  placeholder="Input Deskripsi Product"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Url Gambar</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="foto"
                  placeholder="Input URL Gambar"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
          </Modal.Body>
    )
    footer = (
        <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" onClick={saveHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
    )
  } else if (type === "edit"){
    header = (<Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>)
    body = (
        <Modal.Body>
            <Row>
              <Form.Label>Nama*</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="nama"
                  value={productModel.nama}
                  placeholder="Input Nama Product"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Jenis</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="jenis"
                  value={productModel.jenis}
                  placeholder="Input Jenis Makanan (Makanan Berat, Minuman, Tambahan,...)"
                  onChange={handleChange}
                  
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Harga</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  name="harga"
                  placeholder="Input Harga"
                  onChange={handleChange}
                  value={productModel.harga}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Stock</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  name="stock"
                  placeholder="Input Stock"
                  onChange={handleChange}
                  value={productModel.stock}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Deskripsi</Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="deskripsi"
                  placeholder="Input Deskripsi Product"
                  onChange={handleChange}
                  value={productModel.deskripsi}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
            <Row>
              <Form.Label style={{marginTop:'15px'}}>Url Gambar</Form.Label>
            </Row>
            <Row>
              <Col>
              <img src={productModel.foto} width={302} height={160}></img>
                <Form.Control
                  type="text"
                  name="foto"
                  placeholder="Input URL Gambar"
                  onChange={handleChange}
                  value={productModel.foto}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Row>
          </Modal.Body>
    )
    footer = (
        <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" onClick={editHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
    )
  } else if (type === "delete"){
    header = (<Modal.Header closeButton>
      <Modal.Title>Delete Product</Modal.Title>
    </Modal.Header>)
  body = (
      <Modal.Body>
          <Row>
            <h5>Apakah anda yakin ingin menghapus data {productModel.nama}?</h5>
          </Row>
        </Modal.Body>
  )
  footer = (
      <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
  )
  }
  else if (type === "active"){
    header = (<Modal.Header closeButton>
      <Modal.Title>Activation Product</Modal.Title>
    </Modal.Header>)
  body = (
      <Modal.Body>
          <Row>
            <h5>Apakah anda yakin ingin mengaktifkan data {productModel.nama}?</h5>
          </Row>
        </Modal.Body>
  )
  footer = (
      <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="success" onClick={activeHandler}>
            Activate it!
          </Button>
        </Modal.Footer>
  )
  }
  return (
    <>
      <div>
        <Modal show={show} onHide={close}>
        {header}
        {body}
        {footer}
        </Modal>
      </div>
    </>
  );
};
