
import "./App.css";
import React,{ useState } from "react";
import Menu from './Screens/Menu'
import Home from './Screens/Home'
import AddFood from "./Screens/AddFood";
import FoodDetails from "./Components/FoodDetails";




function App() {
    const [view, setView] = useState("home");
    const [detail, setdetail] = useState();

    console.log(detail);


    const switchView = (option) => {
        setView(option);
 
      };
      const handledetail = (option,detail) => {
        setView(option);
        setdetail(detail)
      }
return(
    <>
      {view === "menu" && <Menu  handledetail={handledetail} />}
      {view === "addfood" && <AddFood  switchView={switchView} view={view}/>}
      {view === "home" && <Home switchView={switchView} view={view}/>}
      {view === "update" && <FoodDetails detail={detail}/>}
     </>
   
)
}

export default App;
