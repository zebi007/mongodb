

//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err,db) =>{
 
   const MyDatabase=db.db('TodoApp');


   if(err){
       console.log('Unable to connect to MongoDb server');

   }
   console.log('Connected to MongoDb server');

   //findOneAndUpdate  => updates one and returns the object
   //it takes 4 arguments , 1st is the document we wanna to update its name or id
   // 2nd is the update we want to make
   // 3rd options
   //4th callback
   
   MyDatabase.collection('Users').findOneAndUpdate({
       name:"Zohab Malikx"
   },{
       //https://docs.mongodb.com/manual/reference/operator/update/
       $set:{
           name:"Zohaib Developer"
       },
       $inc:{
           age:1
       }
   }
   ,
{
    //options
    //this method returns the origional object not the updated one thats why we set it to false
    returnOrigional:false
}).then((result)=>
{
console.log(result);
});
  



   //db.close();
 } );



