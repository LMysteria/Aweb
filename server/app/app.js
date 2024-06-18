const express = require('express');
const MongoConnect = require('./MongoDB/MongoConnect.js');
const cors = require('cors')
const app = express();
const PORT = 3001;
const path = require('path');

MongoConnect.run;

app.use(cors({
    origin: `*`
}));
app.use(express.json());

app.get('/api', (req, res)=>{
    res.json({message: "Hello from server!"});
});

//host website
app.listen(PORT, ()=>{
    console.log(`Website open at http://192.168.1.5:${PORT}`);
})

module.exports = {
    PORT: PORT
}

