import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {

  const [name,setName] = useState("")

  function handleName(event){
    setName(event.target.value)
    console.log(event.target.value)
  }

  const [image,setImage] = useState("")

  function handleImage(event){
    setImage(event.target.value)
    console.log(event.target.value)
  }

  const [price,setPrice] = useState("")

  function handlePrice(event){
    setPrice(event.target.value)
    console.log(event.target.value)
  }  

  function handleSubmit(e){
    e.preventDefault();

    let newPlant = { name, image, price };
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((plant) => {
        console.log(plant);
        onAddPlant(plant);
      });   
    
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name={name} placeholder="Plant name" onChange={handleName}/>
        <input type="text" name={image} placeholder="Image URL" onChange={handleImage}/>
        <input type="number" name={price} step="0.01" placeholder="Price" onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
