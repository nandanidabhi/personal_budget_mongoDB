//Budget API
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Dev, STA
app.use(cors());

//app.use('/',express.static('public'));


app.get('/hello', (req, res) => {
    res.send('Hello Welcome to Nandani Tutotrial');
});

// app.get('/budget', (req, res) => {
//     fs.readFile('./budgetdata.json', 'utf-8', (err,data)=>{
//         if(err) throw err;
//         res.json(JSON.parse(data));99
//     }); 
// });

//connect to DATABASE
//const mongoDBClient = require('mongodb').MongoClient

let url = 'mongodb://localhost:27017/personal_budget';

const mongoose = require("mongoose")
const nameModel = require("./models/names_schema")
const isHexcolor = require('is-hexcolor');
const validate = require('mongoose-validator');

app.get('/budget', (req, res) => {
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to the database")
        //List all entries 
        nameModel.find({})
            .then((data)=>{
                console.log(data);
                res.send(data);
                mongoose.connection.close();
                console.log("Mongoose close");
            })
            .catch((connectionError)=>{
                console.log(connectionError)
            })
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })
});

app.post('/putbudget', function(req, res){

    var t1=req.body.title;
    var b1=req.body.budget;
    var bc1=req.body.backgroundColor;
    // if(is-hexcolor(bc1)==True){
    //         console.log(bc1);
            //  let newData = new nameModel({title:"Food Service", budget: 140, backgroundColor: "FF69B4"});
            // let newData = new nameModel(data);
            let newData = new nameModel({title:t1, budget: b1, backgroundColor: bc1});

            mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connected to the database")
                    nameModel.insertMany(newData)
                    .then((data)=>{
                        console.log(data)
                        res.send(data)
                        res.send(message)
                        mongoose.connection.close()
                        console.log("Data Inserted Successfully!")
                    })
                    .catch(function(error){
                        res.send(error.message)
                    })
                })
            .catch((connectionError)=>{
                res.send(connectionError.message)
                console.log(connectionError)
            })
        });


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});