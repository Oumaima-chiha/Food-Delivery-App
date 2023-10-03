import React, {useState}from 'react'
import axios from "axios"
import Header from '../Components/Header';

const AddFood=()=>{
    const[NewFood,setNewFood]=useState({name:"",desc:"",imgUrl:"",price:""})
    console.log(NewFood);
    const handleSubmit=(event)=>{
        event.preventDefault()
    axios.post("http://localhost:3000/api/food/add",NewFood).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}
const handleChange=((event)=>{
    var inputName=event.target.name
    var value=event.target.value
setNewFood({...NewFood,[inputName]:value})
})

    return(
        <div className="background_area">
        
        <div className="bg-box">
          <img src="src/assets/images/backgroundImg.jpg" alt="" />
        </div>
        <Header />
        <section className="food_section layout_padding">
        <div className="filters-content">
          <div clasName="container ">

        
        <form onSubmit={(event)=>{handleSubmit(event)}}>
        <div className="box">
           <div className="detail-box">
           <div className="align-center">

        <h1>Add Food</h1>
        </div>
        </div>
        <div className="Add-item">
        <div className="align-center">
          <div className="grid-container-row">
          <span> 
           <input placeholder='FoodName' name="name" type='text' onChange={(event)=>handleChange(event)}></input>
           </span>
          <span>
           <input placeholder='description' name="desc"  type='text'onChange={(event)=>handleChange(event)} ></input>
           </span>
          <span>
           <input placeholder='imageURL' name="imgUrl"  type='text' onChange={(event)=>handleChange(event)}></input>
           </span>
          <span> 
           <input placeholder='Price' name="price"  type='text' onChange={(event)=>handleChange(event)}></input>
           </span>
        </div>
        </div>
        <div className="btn-box">
           <button type='submit'>Add Now</button>
           </div>
           </div>
           </div>
       </form>
       </div>
       </div>
       </section>
       </div>
    )
}

export default AddFood
