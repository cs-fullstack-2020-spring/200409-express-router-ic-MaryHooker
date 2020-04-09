//User route

//Create a router
let express = require('express');
let router = express.Router();

//READ IN CRUD
router.get('/:id',(req,res)=>{
    res.send(`Welcome back ${req.params.id}`);
})

//READ IN CRUD
router.get('/',(req,res)=>{
    res.send('Hello new user');
})

//export router
module.exports = router;