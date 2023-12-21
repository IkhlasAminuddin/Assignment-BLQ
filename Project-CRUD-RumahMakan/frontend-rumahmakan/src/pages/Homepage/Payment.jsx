import React from 'react'
import Modal from 'react-bootstrap/esm/Modal'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'

export const PaymentModal = (props) => {
    const {show, close, grandTotal, handleChangeMoney, payMoney, orderPayments, modePayment} = props

  var title;
  var inputPayMoney;

  if (modePayment === "bayar") {
    title = <Modal.Title>Payment: Terimakasih</Modal.Title>
    inputPayMoney = <Form.Control type="number" placeholder="Pay Money" onChange={(event) => handleChangeMoney(event)} disabled/>
  } else {
    title = <Modal.Title>Money!</Modal.Title>
    inputPayMoney = <Form.Control type="number" placeholder="Pay Money" onChange={(event) => handleChangeMoney(event)}/>
  }

    return (
        <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          {title}
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" disabled value={grandTotal()}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Pay Money</Form.Label>
                {inputPayMoney}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Change</Form.Label>
                <Form.Control type="number" value={payMoney - grandTotal()} disabled/>
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          {modePayment === "bayar" ? (
            <></>
          ):(
            <Button variant="success" onClick={orderPayments}>
            Pay!
          </Button>
          )}
          
        </Modal.Footer>
      </Modal>
    )
}