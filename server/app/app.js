const express = require('express');
const MongoConnect = require('./MongoDB/MongoConnect.js')
const app = express();
const PORT = 500;


MongoConnect.run;

app.get('/', (req, res)=>{
    res.send("hello world!");
});

//host website
app.listen(PORT, ()=>{
    console.log(`Website open at http://localhost:${PORT}`);
})

