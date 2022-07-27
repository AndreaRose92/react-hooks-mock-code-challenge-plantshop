import React, { useState } from "react";

function PlantCard({plant, name, image, price, deletePlant}) {
  
  let [inStock, setInStock] = useState(true)
  
  const handleClick = () => {
    setInStock((inStock) = !inStock)
  }
  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
      .then(()=>{deletePlant(plant)})
  }
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button> 
      )}
      <button onClick={handleDelete} >🗑</button>
    </li>
  );
}

export default PlantCard;
