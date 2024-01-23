import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

export const ListProductPayment = (props) => {
  const { show, close, listMenu, totalHarga } = props;
  console.log("LIST MENU MODAL", listMenu);
  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>List Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table
            class="table table-sm table-bordered table"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {listMenu.map((data, index) =>
                data.quantity !== 0 ? (
                  <tr>
                    <td>{data.nama}</td>
                    <td>{data.quantity}</td>
                    <td>{totalHarga(data)}</td>
                  </tr>
                ) : (
                  <></>
                )
              )}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={close}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
