import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate} from "react-router-dom";

const LogIn = () => {
  const [userType, setUserType] = useState('customer')
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
  const handleEmailChange=(event)=>{
    const newEmail=event.target.value
    setEmail(newEmail)
  }
  const handlePasswordChange=(event)=>{
    const newPassword=event.target.value
    setPassword(newPassword)
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    if (email!==""&& password!=="")
    axios.post(`http://localhost:3000/api/${userType}/login`,{email,password}).then(res=>{
 console.log(res)
      window.localStorage.setItem('token',res.data.token)
      navigate('/')

  }).catch(err=>{
    console.log(err)
    alert("Login failed. Please enter valid email and password.");

  })
  }


  return (
    <div className="form-container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="container h-100" id="body">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img src="https://thumbs.dreamstime.com/z/paper-bags-fast-food-take-away-cafe-logo-disposable-paper-bags-fast-food-coffee-house-banner-beverages-fast-https://thumbs.dreamstime.com/z/take-away-bento-box-japanese-wrapping-cloth-furoshiki-vector-japanese-style-58279035.jpg?w=768-to-125277810.jpg?w=768" className="brand_logo" alt="Logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <div>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="email" name="email" className="form-control input_user" value={email} onChange={handleEmailChange} placeholder="email" required/>
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="password" className="form-control input_pass" value={password} onChange={handlePasswordChange} placeholder="password" required />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customControlInline" />
                      <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customerRadio"
                        name="userType"
                        className="custom-control-input"
                        value="customer"
                        checked={userType === 'customer'}
                        onChange={handleUserTypeChange}
                      />
                      <label className="custom-control-label" htmlFor="customerRadio">
                        Customer
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="ownerRadio"
                        name="userType"
                        className="custom-control-input"
                        value="owner"
                        checked={userType === 'owner'}
                        onChange={handleUserTypeChange}
                      />
                      <label className="custom-control-label" htmlFor="ownerRadio">
                        Owner
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button type="submit" name="button" className="btn login_btn" >
                      Login
                    </button>
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
      </form>
    </div>
  );
};

export default LogIn;
