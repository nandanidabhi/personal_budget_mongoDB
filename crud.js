//connect to DATABASE
const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/personal_budget';

//perform desired operation 

mongoDBClient.connect(url, (operationError, dbHandler)=>{
    if(operationError){
        console.log("An error has occurred during the connection process");
    }
    else{
        console.log("Connected to the database")
        //Insert operation
        // let data = {id:10,name:"added a new name from MongoDB Native Driver"};
        // dbHandler.db('mongodb_demo').collection('names').insertOne(data,(operr, opresult)=>{
        //     if(operr){
        //         console.log("Unable to insert data into your collection")
        //     }
        //     else{
        //         console.log("Insert Successfully")
        //         //dbHandler.close()
        //     }
        // })
        //List Operation
        // dbHandler.db('mongodb_demo').collection('names').find().toArray((operr, opresult)=>{
        //     if(operr){
        //         console.log(operr)
        //     }
        //     else{
        //         for(var i=0;i<opresult.length; i++)
        //         {
        //             console.log(opresult[i])
        //         }
        //         dbHandler.close()
        //     }
        // });
        //Fetch Operation
        // dbHandler.db('mongodb_demo').collection('names').findOne({id:1},(operr, opresult)=> {
        //     if(operr){
        //         console.log(operr)
        //     }
        //     else{
        //         console.log(opresult)
        //         dbHandler.close()
        //     }
        // })
        //Update Operation 
        // let newData = {$set:{id:10,name:"added a new name from MongoDB Native Driver"}};
        // dbHandler.db('mongodb_demo').collection('names').updateOne({id:1},newData, (operr, opresult) => {
        //     if(operr){
        //         console.log("Unable to insert data into your collection")
        //     }
        //     else{
        //         console.log("Updated Successfully")
        //         dbHandler.close()
        //     }
        // })
        //Delete Operation
        // let newData = {$set:{id:10,name:"added a new name from MongoDB Native Driver"}};
        // dbHandler.db('mongodb_demo').collection('names').deleteOne({id:10},newData, (operr, opresult) => {
        //     if(operr){
        //         console.log("Unable to insert data into your collection")
        //     }
        //     else{
        //         console.log(opresult    )
        //         console.log("Deleted Successfully")
        //         dbHandler.close()
        //     }
        // })

        //Bulk Delete
        // let newData = {$set:{id:10,name:"added a new name from MongoDB Native Driver"}};
        // dbHandler.db('mongodb_demo').collection('names').deleteMany({id:1},newData, (operr, opresult) => {
        //     if(operr){
        //         console.log("Unable to insert data into your collection")
        //     }
        //     else{
        //         console.log(opresult    )
        //         console.log("Deleted Successfully")
        //         dbHandler.close()
        //     }
        // })
    }

});