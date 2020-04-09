//Express Routes IC

//create entry point
let express = require('express');
let app = express();

//put port in variable
let port = 8000;

//tell express to use JSON middleware requests/responses
app.use(express.json());

//listen to portnumber
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

//import router modules
let api = require('./routes/api.js');
let user = require('./routes/user.js');

//mount routes
app.use('/api',api);
app.use('/user',user);

// //sanity
// app.get('/test',(req,res)=>{
//     res.send('Working')
// })