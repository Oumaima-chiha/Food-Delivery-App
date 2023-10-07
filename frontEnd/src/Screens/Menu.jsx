import React,{useState,useEffect} from 'react'
import FoodList from '../Components/FoodList'
import $ from "jquery"
import Header from '../Components/Header'


const Menu=()=>{
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
          <img src="src/assets/images/hero-bg.jpg" alt="" />
        </div>
        <Header />
<section className="food_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>
   <FoodList items={data} />
    </div>
  </section>

        </div>
    )
}
export default Menu 