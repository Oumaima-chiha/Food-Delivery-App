 import React from 'react'
import Header from '../Components/Header.jsx'
 const Home=({switchView , view})=>{
    return(
        <div className="background_area">
        <div className="bg-box">
          <img src="src/assets/images/backgroundImg.jpg" alt="" />
        </div>
  
        <Header switchView={switchView}  view={view} />
      
      </div>
    )
 }
 export default Home