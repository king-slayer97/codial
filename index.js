const express = require('express');

const app = express();
const PORT = 8000;

app.listen(PORT,(err)=>{
    if(err){
        console.log(`There was an error listening on port ${PORT}`);
    }
    else{
        console.log(`Listening on port ${PORT}`);
    }
});