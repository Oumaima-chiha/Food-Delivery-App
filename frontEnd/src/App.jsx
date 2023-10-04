import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./Screens/Menu";
import AddFood from "./Screens/AddFood";
import Home from "./Screens/Home";
import FoodDetails from"./Components/FoodDetails";
import SignUp from "./Screens/SignUp.jsx";
import LogIn from "./Screens/LogIn";
import Customer from './Components/customer';
import Own from './Components/Own'
const App =()=>{
  return (
    <Router>
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/menu" Component={Menu}/>
          <Route path="/addfood" Component={AddFood}/>
          <Route path="/update" Component={FoodDetails}/>
          <Route path="/signup" Component={SignUp}/>
          <Route path="/signup/customer" Component={Customer}/>
          <Route path="/signup/own" Component={Own}/>
          <Route path="/login" Component={LogIn}/>
      </Routes>
    </Router>
  );
}

export default App;