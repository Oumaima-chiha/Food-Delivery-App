const owner = require("../Database/models/owner.js");



module.exports = {
  
    getAllOwner: function(req, res) {
        owner.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })

    },
   
    loginOwner: function(req, res) {
        const {username,password} = req.body
      owner.getOne(function(err, results){
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
            res.status(401).send('user not found')
        },username) 

    },
    
    registerOwner: function(req, res) {
        const {username,email,password,restaurant_name,food_category} = req.body;
   
        owner.add( function(err, results){
            if(err) res.status(500).send(err);
            else res.json(results)
        },username,email,password,restaurant_name,food_category)
    },


}