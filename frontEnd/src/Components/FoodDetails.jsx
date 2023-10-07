import React, { useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

const FoodDetails = () => {
  const location=useLocation()
  const {item}=location.state
  const [updateFood, setUpdateFood] = useState(item);
  const [edit, setEdit] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/api/food/update/" + item.Idfood, updateFood)
      .then((res) => {
        console.log(res);
        setEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (event) => {
    var inputName = event.target.name;
    var value = event.target.value;
    setUpdateFood({ ...updateFood, [inputName]: value });
  };
  const switchButton = () => {
    setEdit(true);
  };
  return (
    <div className="background_area">
      <div className="bg-box">
        <img src="src/assets/images/hero-bg.jpg" alt="" />
      </div>
      {!edit ? (
        <section className="food_section layout_padding">
          <div className="filters-content">
            <div className="container ">
              <div className="box">
                <div className="img-box">
                  <img src={updateFood.imgUrl} />
                </div>
                <div className="detail-box ">
                  <h1>{updateFood.name}</h1>
                  <h2>{updateFood.price}</h2>
                  <p>{updateFood.desc}</p>
                </div>

                <div className="btn-box">
                  <button
                    className="btn1"
                    style={{ zIndex: 10 }}
                    onClick={() => {
                      switchButton();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="food_section layout_padding">
          <div className="filters-content">
            <div className="container ">
              <form
                onSubmit={(event) => {
                  handleSubmit(event);
                }}
              >
                <div className="box">
                  <div className="detail-box">
                    <div className="align-center">
                      <h1>Edit Food</h1>
                    </div>
                  </div>
                  <div className="align-center">
                    <div className="grid-container-row">
                      <span>
                        <input
                          placeholder="FoodName"
                          value={updateFood.name}
                          name="name"
                          type="text"
                          onChange={(event) => handleChange(event)}
                        ></input>
                      </span>
                      <span>
                        <input
                          placeholder="description"
                          value={updateFood.desc}
                          name="desc"
                          type="text"
                          onChange={(event) => handleChange(event)}
                        ></input>
                      </span>
                      <span>
                        <input
                          placeholder="imageURL"
                          value={updateFood.imgUrl}
                          name="imgUrl"
                          type="text"
                          onChange={(event) => handleChange(event)}
                        ></input>
                      </span>
                      <span>
                        <input
                          placeholder="Price"
                          name="price"
                          value={updateFood.price}
                          type="text"
                          onChange={(event) => handleChange(event)}
                        ></input>
                      </span>
                    </div>
                    <div className="btn-box">
                      <button type="submit">Save</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FoodDetails;
