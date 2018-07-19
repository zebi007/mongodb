

//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err,db) =>{
 
   const MyDatabase=db.db('TodoApp');


   if(err){
       console.log('Unable to connect to MongoDb server');

   }
   console.log('Connected to MongoDb server');

//    MyDatabase.collection('Todos').find({
//        _id:new ObjectID('5b5082f65551bd54d1826c13')
//    }).toArray().then((docs)=>{
//        console.log('Todos');
//        // stringify(documents, filter,spacing);
//        console.log(JSON.stringify(docs,undefined,2))
//    },(err)=>{
//        console.log('Unable to fetch todos',err);
//    });




   MyDatabase.collection('Users').find({
       name:'Wahab'
   }).toArray().then((docs)=>{
       console.log('Todos');
       // stringify(documents, filter,spacing);
       console.log(JSON.stringify(docs,undefined,2))
   });



  







   //db.close();
} );



