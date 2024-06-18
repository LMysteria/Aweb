const express = require('express');
const MongoConnect = require('./MongoDB/MongoConnect.js')
const app = express();
const PORT = 3001;


MongoConnect.run;

app.get('/api', (req, res)=>{
    res.json({message: "Hello from server!"});
});

//host website
app.listen(PORT, ()=>{
    console.log(`Website open at http://localhost:${PORT}`);
})

