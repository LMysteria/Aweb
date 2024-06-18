const express = require('express');
const MongoConnect = require('./MongoDB/MongoConnect.js')
const app = express();
const PORT = 3001;
const path = require('path');

MongoConnect.run;

app.use(express.static(path,resolve(__dirname, '../../client/build')));

app.get('/api', (req, res)=>{
    res.json({message: "Hello from server!"});
});

//host website
app.listen(PORT, ()=>{
    console.log(`Website open at http://localhost:${PORT}`);
})

