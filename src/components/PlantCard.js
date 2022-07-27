import React, { useState } from "react";

function PlantCard({plant, name, image, price, deletePlant, updatePlants}) {
  
  let [inStock, setInStock] = useState(true)
  let [newPrice, setNewPrice] = useState('')
  

  const handleClick = () => {
    setInStock((inStock) = !inStock)
  }
  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
      .then(()=>{deletePlant(plant)})
  }

  const trackPrice = e => {
    setNewPrice(e.target.value)
  }

  const changePrice = (e) => {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"price": parseFloat(newPrice)})
    })
      .then(r=>r.json())
      .then(updatedPlant=>updatePlants(updatedPlant))
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
      <form onSubmit={e=>changePrice(e)}>
        <input onChange={trackPrice} type='number' step='0.01' placeholder="Change Price"></input>
        <button type="submit">✅</button>
      </form>
    </li>
  );
}

export default PlantCard;
