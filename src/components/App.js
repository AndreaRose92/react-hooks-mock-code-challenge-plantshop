import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const url = 'http://localhost:6001/plants'

function App() {

  let [plantArray, setPlantArray] = useState([])

  useEffect(()=>{
    fetch(`${url}`)
      .then(r=>r.json())
      .then(data=>setPlantArray(data))
  }, [])

  function deletePlant(deletedPlant) {
    const updatedPlants = plantArray.filter((plant) => plant.id !== deletedPlant.id);
    setPlantArray(updatedPlants);
  }
  

  const handleSubmit = e => {
    fetch(`${url}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": e.name,
        "image": e.image,
        "price": e.price
      })
    })
      .then(r=>r.json())
      .then(newPlant=>setPlantArray(plantArray = [...plantArray, newPlant]))

    // setPlantArray(plantArray = [...plantArray, e])
}

  function updatePlants(updatedPlant) {
    const updatedPlants = plantArray.map((plant)=>{
      if (plant.id === updatedPlant.id) {
        return updatedPlant
      } else {
        return plant
      }
    })
    setPlantArray(plantArray = updatedPlants)
  }


  console.log(plantArray)


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantArray} updatePlants={updatePlants} handleSubmit={handleSubmit} deletePlant={deletePlant} />
    </div>
  );
}

export default App;
