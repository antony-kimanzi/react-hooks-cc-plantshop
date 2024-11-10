import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import Button from 'react-bootstrap/Button';

function PlantCard({ plant, handleDelete, handleUpdate }) {
  const [outOfStock, setOutOfStock] = useState(false);

  const stockButton = () => {
    setOutOfStock(true);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!outOfStock ? (
        <Button className="stock-button" variant="success" onClick={stockButton}>In Stock</Button>
      ) : (
        <Button className="stock-button" variant="secondary">Out Of Stock</Button>
      )}
      <UpdateButton plant={plant} onUpdate={handleUpdate} />
      <DeleteButton id={plant.id} handleDelete={handleDelete} />
    </li>
  );
}

export default PlantCard;
