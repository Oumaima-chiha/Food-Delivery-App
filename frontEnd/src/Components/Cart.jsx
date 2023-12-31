import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart =()=>{
  const [currentCart,setCurrentCart]=useState({})
  const getCart=()=>{
    axios
      .get("http://localhost:3000/api/cart/getOne/"+1)
      .then((res) => {
        setCurrentCart(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(()=>{
    getCart()
  },[])
  return (
    <section className="vh-100 gradient-custom-2">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <div className="card card-stepper" style={{borderradius:"16px"}}>
            <div className="card-header p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">{currentCart.foodOrder}</span></p>
                </div>
                <div>
                  <h6 className="mb-0"> <a href="#">View Details</a> </h6>
                </div>
              </div>
            </div>
            <div className="card-body p-4">{
              currentCart.foodList   && currentCart.foodList.map((elem,index)=>
              <div key={elem.idFood} className="d-flex flex-row mb-4 pb-2">
                <div className="flex-fill">
                  <h5 className="bold">{elem.name}</h5>
                  <p className="text-muted"> Qt: 1 item</p>
                  <h4 className="mb-3"> $ {elem.price} <span className="small text-muted"> </span></h4>
                  <p className="text-muted">Tracking Status on: <span className="text-body">11:30pm, Today</span></p>
                </div>
                <div>
                  <img className="align-self-center img-fluid"
                    src={elem.imgUrl} width="250"/>
                </div>
              </div>)}
              <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
                <li className="step0 active" id="step1"><span
                    style={{marginleft: "22px", margintop: '12px'}}>PLACED</span></li>
                <li className="step0 active text-center" id="step2"><span>SHIPPED</span></li>
                <li className="step0 text-muted text-end" id="step3"><span
                    style={{marginright: '22px'}}>DELIVERED</span></li>
              </ul>
            </div>
            <div className="card-footer p-4">
              <div className="d-flex justify-content-between">
                <h5 className="fw-normal mb-0"><a href="#!">Track</a></h5>
                <div className="border-start h-100"></div>
                <h5 className="fw-normal mb-0"><a href="#!">Cancel</a></h5>
                <div className="border-start h-100"></div>
                <h5 className="fw-normal mb-0"><a href="#!">Pre-pay</a></h5>
                <div className="border-start h-100"></div>
                <h5 className="fw-normal mb-0"><a href="#!" className="text-muted"><i className="fas fa-ellipsis-v"></i></a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 )

}
export default Cart;
