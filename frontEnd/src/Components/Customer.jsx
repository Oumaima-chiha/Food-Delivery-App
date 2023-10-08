import React,{useState} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";


const Customer = () => {
  const[user,setUser]=useState({})
  const navigate=useNavigate()
  const handleChange=(event)=>{
    const input=event.target.name
    const value=event.target.value
    setUser({...user,[input]:value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    axios.post("http://localhost:3000/api/customer/register",user).then(res=>{
      console.log(res)
      navigate('/logIn')
    }).catch(err=>{
      console.log(err)
      alert("Register failed");
    })

  }
  return (
    <div className={"form-container d-flex justify-content-center align-items-center"}>
    <form onSubmit={handleSubmit}>
       <div className="container h-100" id="body">
  <div className="d-flex justify-content-center h-100">
    <div className="user_card">
      <div className="d-flex justify-content-center">
        <div className="brand_logo_container">
          <img src="https://thumbs.dreamstime.com/b/take-away-bento-box-japanese-wrapping-cloth-furoshiki-vector-japanese-style-58279035.jpg" className="brand_logo" alt="Logo"/>
        </div>
      </div>
      <div className="d-flex justify-content-center form_container">
        <div>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="name" className="form-control input_user" value={user.name} placeholder="Name" onChange={handleChange} required/>
          </div>
          
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="text" name="lastName" className="form-control input_pass" value={user.lastName} placeholder="Last Name" onChange={handleChange} required/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="address" className="form-control input_user" value={user.address} placeholder="Address" onChange={handleChange} required/>
          </div>
          
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="text" name="phoneNumber" className="form-control input_pass" value={user.phoneNumber} placeholder="phone-number" onChange={handleChange} required/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="email" name="email" className="form-control input_user" value={user.email} placeholder="email" onChange={handleChange} required/>
          </div>
          
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="password" className="form-control input_pass" value={user.password} placeholder="password" onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customControlInline"/>
              <button type="submit" name="button" className="btn login_btn">Register</button>
            </div>
          </div>
            <div className="d-flex justify-content-center mt-3 login_container">
        
         </div>
        </div>
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

export default Customer;
