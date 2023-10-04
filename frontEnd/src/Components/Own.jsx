import React from "react";
import Header from "./Header";
import backgroundImg from '../assets/images/backgroundImg.jpg'

const Owner = () => {
  return (
    <div className={"form-container d-flex justify-content-center align-items-center"}>
    <form>
       <div className="container h-100" id="body">
  <div className="d-flex justify-content-center h-100">
    <div className="user_card">
      <div className="d-flex justify-content-center">
        <div className="brand_logo_container">
          <img src="https://thumbs.dreamstime.com/b/take-away-bento-box-japanese-wrapping-cloth-furoshiki-vector-japanese-style-58279035.jpg" className="brand_logo" alt="Logo"/>
        </div>
      </div>
      <div className="d-flex justify-content-center form_container">
        <form>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="" className="form-control input_user" value="" placeholder="Name"/>
          </div>
          
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="" className="form-control input_pass" value="" placeholder="Last Name"/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="" className="form-control input_user" value="" placeholder="Restaurant-Name"/>
          </div>
          
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="" className="form-control input_pass" value="" placeholder="food-category"/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="" className="form-control input_user" value="" placeholder="email"/>
          </div>
          
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="" className="form-control input_pass" value="" placeholder="password"/>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customControlInline"/>
              <button type="button" name="button" className="btn login_btn">Register</button>
            </div>
          </div>
            <div className="d-flex justify-content-center mt-3 login_container">
        
         </div>
        </form>
      </div>
  
      <div className="mt-4">
        
        <div className="d-flex justify-content-center links">
         
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</div>
  );
};
export default Owner;
