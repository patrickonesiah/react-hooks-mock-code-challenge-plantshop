import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantCards = plants.map((plantObj)=>{
    console.log(plantObj);
   return (
    <PlantCard 
    key={plantObj.id}
    plants={plantObj}
    // onDeleteStories={handleDeleteStories}
    />
  )}); 

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
