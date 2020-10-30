const mongoose = require("mongoose")
const nameModel = require("./models/names_schema")

let url = 'mongodb://localhost:27017/mongodb_demo';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to the database")
        //List all entries 
        // nameModel.find({})
        //     .then((data)=>{
        //         console.log(data)
        //         mongoose.connection.close()

        //     })
        //     .catch((connectionError)=>{
        //         console.log(connectionError)
        //     })

            //Fetch one document
            // nameModel.find({id:3})
            // .then((data)=>{
            //     console.log(data)
            //     mongoose.connection.close()

            // })
            // .catch((connectionError)=>{
            //     console.log(connectionError)
            // })

            //fetch by id
            // nameModel.findById("5f99db13b3c89198ae78d976")
            // .then((data)=>{
            //     console.log(data)
            //     mongoose.connection.close()

            // })
            // .catch((connectionError)=>{
            //     console.log(connectionError)
            // })

            //Insert Many data
            // let newData = new nameModel({id: 10, name:"Testing mongoose"});
            // nameModel.insertMany(newData)
            // .then((data)=>{
            //     console.log(data)
            //     mongoose.connection.close()

            // })
            // .catch((connectionError)=>{
            //     console.log(connectionError)
            // })

        //Update content
        // let newData = {$set:{id:11,name:"Updated Content"}};
        // nameModel.update({id:10, newData})
        //     .then((data)=>{
        //         console.log(data)
        //         mongoose.connection.close()

        //     })
        //     .catch((connectionError)=>{
        //         console.log(connectionError)
        //     })

        //remove data
        nameModel.remove({id:10})
            .then((data)=>{
                console.log(data)
                mongoose.connection.close()

            })
            .catch((connectionError)=>{
                console.log(connectionError)
            })
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })