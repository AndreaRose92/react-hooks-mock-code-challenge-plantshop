import React, { useState } from "react";

function NewPlantForm({onSubmit}) {

  let [formName, setFormName] = useState('')
  let [formImage, setFormImage] = useState('')
  let [formPrice, setFormPrice] = useState('')  

  const trackName = e => {setFormName(e.target.value)}
  const trackImage = e => {setFormImage(e.target.value)}
  const trackPrice = e => {setFormPrice(e.target.value)}




  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = {"name": formName, "image": formImage, "price": formPrice, "id": formName}
    onSubmit(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input onChange={trackName} type="text" name="name" placeholder="Plant name" />
        <input onChange={trackImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={trackPrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button onSubmit={handleFormSubmit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
