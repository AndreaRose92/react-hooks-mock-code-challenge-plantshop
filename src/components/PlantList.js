import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deletePlant}) {

  const renderPlantCards = plants.map((plant)=> {return <PlantCard deletePlant={deletePlant} plant={plant} key={plant.id} name={plant.name} image={plant.image} price={plant.price} />})


  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;
