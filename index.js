const express = require('express');
const router = require('./routes');

const app = express();
const PORT = 8000;

//use express routes
app.use('/',router);
// app.use('/users',router);


app.listen(PORT,(err)=>{
    if(err){
        console.log(`There was an error listening on port ${PORT}`);
    }
    else{
        console.log(`Listening on port ${PORT}`);
    }
});