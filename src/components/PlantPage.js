import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchPlant, setSearchPlant] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then((data) => {
        setPlants(data);
      })
  }, []);

  const handleDelete = (id) => {
    setPlants((previousPlants) => previousPlants.filter((plant) => plant.id !== id));
  };

  const addPlant = (newPlant) => {
    setPlants((previousPlants) => [...previousPlants, newPlant])
  }

  const handleUpdate = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchPlant={searchPlant} setSearchPlant={setSearchPlant} />
      <PlantList plants={filteredPlants} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </main>
  );
}

export default PlantPage;
