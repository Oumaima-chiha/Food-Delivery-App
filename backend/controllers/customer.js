const customer = require("../Database/models/customer.js");



module.exports = {
  
    getAllCustomer: function(req, res) {
        customer.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })

    },
   
    loginCustomer: function(req, res) {
        const {userName,password} = req.body
      customer.getOne(function(err, results){
            if(err) res.status(500).send(err);
            else if (results.length >0)
            {
                    if ( password===results[0].password)
                    {
                        res.json(results[0])
                    }
                    else
                    res.status(401).send('wrong credentials')
            }
            else 
            res.status(401).send('user not')
        },userName) 

    },
    
    registerCustomer: function(req, res) {
        const {iduser,userName,userAdress,userNumber,userLastName} = req.body;
   
        customer.add( function(err, results){
            if(err) res.status(500).send(err);
            else res.json(results)
        },iduser,userName,userAdress,userNumber,userLastName)
    },


}