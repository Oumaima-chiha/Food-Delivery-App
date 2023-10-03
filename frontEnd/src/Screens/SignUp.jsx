import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
        <div class="sign-up-container">
        <h1>Sign Up</h1>
        <p>Are you signing  as a customer or a restaurant owner?</p>
        <div className="choice-buttons" id="body">
        <Link className="form-button" id="center" to="/signup/customer">Sign Up as a customer</Link>
        <Link  className="form-button" to="/signup/own">Sign Up as a restaurant owner </Link>
      </div>
      </div>
     </div>
  );
};
export default SignUp;
