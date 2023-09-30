import React from "react";
import FoodItem from "./FoodItem.jsx";


const FoodList = (props) => (

    <div className="filters-content">
     
    <div className="row grid">
    <div className="grid-container">
    {props.items.map((item) => (
  
        <FoodItem key={item.id} item={item} handledetail={props.handledetail} />
    
    ))}
    </div>
    </div>
  </div>
);

export default FoodList;