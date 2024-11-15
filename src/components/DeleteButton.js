import React from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

export default function DeleteButton({ id, handleDelete }) {
  const deletePlant = () => {
    fetch(`https://react-hooks-cc-plantshop-iyxf.onrender.com/plants/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        handleDelete(id);
        toast.success("plant deleted successfully")        
    });
  };

  return (
    <>
      <Button className="delete-button" variant="dark" onClick={deletePlant}>Remove plant</Button>
    </>
  );
}
