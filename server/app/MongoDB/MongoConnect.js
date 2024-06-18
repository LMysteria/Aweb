const uri = "mongodb+srv://Mysteria:Mysteria2003!@cluster0.a03knzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient( uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(){
    try{
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Successfully connect to mongoDB!");
    } catch(error){
        console.error(error);
    }
}

async function stop(){
    try{
        await client.close();
    } catch(error){
        console.error(error);
    }
}

module.exports = {
    run: run(),
    stop: stop(),
}