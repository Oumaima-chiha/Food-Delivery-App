const owner = require("../Database/models/owner.js");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllOwner: function (req, res) {
    owner.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  loginOwner: function (req, res) {
    const { email, password } = req.body;
    owner.getOne(function (err, results) {
      if (err) res.status(500).send(err);
      else if (results.length > 0) {
        if (password === results[0].password) {
       
          jwt.sign(
            {
              email: results[0].email,
              name: results[0].restaurant_name,
              category: results[0].food_category,
              idOwner: results[0].idOwner,
            },
            "oumayma",
            (err, token) => {
              if (err) {
                res.status(500).json({ error: "Failed to generate token" });
              } else {
                res.json({ token });
              }
            }
          );
        } else res.status(401).send("wrong credentials");
      } else res.status(401).send("user not");
    }, email);
  },

  registerOwner: function (req, res) {
    const { email, password, restaurant_name, food_category } = req.body;

    owner.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      email,
      password,
      restaurant_name,
      food_category
    );
  },
};
