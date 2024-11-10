import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDelete, handleUpdate }) {

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      ))}
    </ul>
  );
}

export default PlantList;
