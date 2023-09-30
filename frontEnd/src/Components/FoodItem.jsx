import React from "react";
import axios from "axios";

const FoodItem = ({ item, handledetail }) => {
  {
    console.log(handledetail);
  }
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

  return (
    <div className="box">
      <div>
        <div className="img-box">
          <img
            src={item.imgUrl}
            alt=""
            onClick={() => {
              handledetail("update", item);
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
              {" "}
              Delete{" "}
            </button>
            <a href="">
              <i
                className={"fa fa-shopping-cart"}
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
