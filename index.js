//Express Routes IC

//create entry point
let express = require('express');
let app = express();

//put port in variable
let port = 2112;

//listen to portnumber
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});