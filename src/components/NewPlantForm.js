import React from "react";
import{useState} from "react";
import "../index.css";
import { toast } from 'react-toastify';


function NewPlantForm({addPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedPrice = parseFloat(price);

    fetch("https://react-hooks-cc-plantshop-iyxf.onrender.com/plants", {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        image: image,
        price: parsedPrice
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((newPlant) => {
        addPlant(newPlant);
        setName("");
        setImage("");
        setPrice("");
        toast.success("added plant successfully.")
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" placeholder="Plant name" onChange={(e)=> setName(e.target.value)} required/>
        <input type="url" value={image} name="image" placeholder="Image URL" onChange={(e)=> setImage(e.target.value)} required/>
        <input type="number" value={price} name="price" step="0.01" placeholder="Price" onChange={(e)=> setPrice(e.target.value)} required/>
        <button className="submit-button" type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
