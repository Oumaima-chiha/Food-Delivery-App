const customer = require("../Database/models/customer.js");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllCustomer: function (req, res) {
    customer.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  loginCustomer: function (req, res) {
    const { email, password } = req.body;
    customer.getOne(function (err, results) {
      if (err) res.status(500).send(err);
      else if (results.length > 0) {
        if (password === results[0].password) {
          jwt.sign(
            {
              email: results[0].email,
              name: results[0].name,
              lastName: results[0].lastName,
              id: results[0].iduser,
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

  registerCustomer: function (req, res) {
    const { password, lastName, name, email, phoneNumber, address } = req.body;

    customer.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      password,
      lastName,
      name,
      email,
      phoneNumber,
      address
    );
  },
};
