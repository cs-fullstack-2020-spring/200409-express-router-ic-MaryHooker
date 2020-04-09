//API route

//Create a router
let express = require('express');
let router = express.Router();

//READ IN CRUD
router.get('/:record_id',(req,res)=>{
    res.send('You attempted to read a single record')
})

//READ IN CRUD
router.get('/',(req,res)=>{
    res.send('You attempted to read multiple records')
})

//CREATE IN CRUD
router.post('/',(req,res)=>{
    req.body.status = 'CREATED';
    res.send(req.body);
})

//export router
module.exports = router;