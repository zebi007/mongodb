//This file is for inserting things in the database

//we need a mongo client , mongo client lets you connect to mongo server and issue commands to manipulate database

const MongoClient = require('mongodb').MongoClient;
//connect() is a method that takes 2 arguments , 1st is a string that is the url where your database lives 
//second argument is a callback function that's gonna fire when the connection is succeded or failed and then we can handle things appropriately , if its failed we will print error messiage else we will manipulate database
//the callback function takes two arguments first is the error
//second argument is the db object this is the object which we will use to read and write data


MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err,db) =>{
   //first we are handling the error
 
   const MyDatabase=db.db('TodoApp');


   if(err){
       console.log('Unable to connect to MongoDb server');

   }
   console.log('Connected to MongoDb server');

//    MyDatabase.collection('Todos').insertOne({
//        text:'Something to do',
//        completed:false
//    },(err,result)=>{
//        if(err)
//        {
//            return console.log('Unable to insert todo',err);
//        }

//        console.log(JSON.stringify(result.ops,undefined,2));
//    });

//insertOne takes 2 arguments first is the data called doc or document and the second is the callback function

   MyDatabase.collection('Users').insertOne({
       name:'Zohaib',
       age:22,
       location:'Rawalpindi'
   },(err,result)=>{
       //error case code
       if(err){
           return console.log('Unable to insert user',err);
       }
       //success case code
       //this show all of the records that got inserted 
       console.log(result.ops[0]._id.getTimestamp());
   });



   db.close();
} );



