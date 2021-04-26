const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:3000"
  };

  app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())

const dbConfig = require('./config/database.config')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(() => {
    console.log("Successfully connected to the database"); 
}).catch(err =>{
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
require('./Routes/products.routes')(app);

app.get('/',(req,res) =>{
    res.json({"message":"welcome to product add"})
});
app.listen(8000,() =>{
    console.log("Server is listening on port 8000")
})