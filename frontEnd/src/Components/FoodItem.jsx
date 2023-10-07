import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const FoodItem = ({ item }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    axios
      .delete("http://localhost:3000/api/food/delete/" + item.Idfood)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addToCart = () => {
    axios
      .post("http://localhost:3000/api/food/addTocart/",item.Idfood)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="box">
      <div>
        <div className="img-box">
          <img
            src={item.imgUrl}
            alt=""
            onClick={() => {
             navigate("/update",{state:{item}})
            }}
          />
        </div>
        <div className="detail-box">
          <h5>{item.name}</h5>
          <p>{item.desc}</p>
          <div className="options">
            <h6>{item.price}</h6>
            <button
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </button>
            <button onClick={addToCart}>
              <i
                className={"fa fa-shopping-cart"}
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;