import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
//   <div class="sign-up-container">
//   <h1>Sign Up</h1>
//   <p>Are you signing  as a customer or a restaurant owner?</p>
//   <div className="choice-buttons" id="body">
//   <Link className="form-button" id="center" to="/signup/customer">Sign Up as a customer</Link>
//   <Link  className="form-button" to="/signup/own">Sign Up as a restaurant owner </Link>
// </div>
// </div>
// </div>
  
  return (
    <div className="form-container d-flex justify-content-center align-items-center">
  
      <div className="container h-100" id="body">
        <div className="d-flex justify-content-center h-100">
          <div id='ss' className="user_card cardss">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src="https://thumbs.dreamstime.com/z/paper-bags-fast-food-take-away-cafe-logo-disposable-paper-bags-fast-food-coffee-house-banner-beverages-fast-https://thumbs.dreamstime.com/z/take-away-bento-box-japanese-wrapping-cloth-furoshiki-vector-japanese-style-58279035.jpg?w=768-to-125277810.jpg?w=768" className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <div>
              
              <div className="top">
              <div className="d-flex justify-content-center mt-3 login_container">
                
              <Link className="form-button" id="center" to="/signup/customer">Sign Up as a customer</Link>
                </div>
                
              
                <div className="d-flex justify-content-center mt-3 login_container">
                <Link  className="form-button" to="/signup/own">Sign Up as a restaurant owner </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">

              </div>
              <div className="d-flex justify-content-center links">

              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
);
  
};
export default SignUp;
