import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleSubmit, deletePlant, updatePlants}) {
  
  const [searchQuery, setSearchQuery] = useState('')
  

  const handleSearch = newSearch => {
    setSearchQuery(newSearch)
  }

  let searchedPlants = plants.filter((plant)=> {
    if (searchQuery === '') {return true} else {return plant.name.toLowerCase().includes(searchQuery.toLowerCase())}
  })

  return (
    <main>
      <NewPlantForm onSubmit={handleSubmit} />
      <Search onSearch={handleSearch} />
      <PlantList plants={searchedPlants} updatePlants={updatePlants} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
