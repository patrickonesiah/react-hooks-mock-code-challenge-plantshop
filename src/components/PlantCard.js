import React, {useState} from "react";

// "id": 1,
// "name": "Aloe",
// "image": "./images/aloe.jpg",
// "price": 15.99

function PlantCard({plants}) {
const {id, name, image, price} = plants;

const [hasStock, setHasStock] = useState(true)

function handleStock(){
  setHasStock(!hasStock)
  console.log(hasStock)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {hasStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
