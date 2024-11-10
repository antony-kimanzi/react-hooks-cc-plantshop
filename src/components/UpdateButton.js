import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../index.css"
import { toast } from "react-toastify";

function UpdateButton({ plant, onUpdate }) {
  const [show, setShow] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleUpdate = (e) => {
    e.preventDefault();

    const parsedPrice = parseFloat(newPrice);

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parsedPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        onUpdate(updatedPlant);
        handleClose();
        toast.success("updated price successfully.")
      });
  };

  return (
    <>
      <Button className="update-button" variant="warning" onClick={handleShow}>
        Update Price
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group>
              <Form.Label>New Price</Form.Label>
              <Form.Control
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                step="0.01"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateButton;
