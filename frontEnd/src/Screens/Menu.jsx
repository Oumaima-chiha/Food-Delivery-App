import React,{useState,useEffect} from 'react'
import Header from'../Components/Header'
import FoodList from '../Components/FoodList'
import $ from "jquery"

const Menu=({handledetail})=>{
  const [data,setdata]=useState([])
  useEffect( ()=>{
    $.ajax({
      method:"Get",
      url:"http://localhost:3000/api/food/getAll",
      success:function(data){
        console.log(data)
        setdata(data)
      }
    })
  },[])
    return(
        <div className="background_area">
        <div className="bg-box">
          <img src="src/assets/images/backgroundImg.jpg" alt="" />
        </div>
<Header/>
<section className="food_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>
   <FoodList items={data} handledetail={handledetail}/>
    </div>
  </section>

        </div>
    )
}
export default Menu 