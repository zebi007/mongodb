

//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err,db) =>{
 
   const MyDatabase=db.db('TodoApp');


   if(err){
       console.log('Unable to connect to MongoDb server');

   }
   console.log('Connected to MongoDb server');

   

   //deteleMany
   
//    MyDatabase.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//        console.log(result);
//    });


   //deleteOne           => it deletes the first item that matches the criteria

//    MyDatabase.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//             console.log(result);
//         });


   //findOneAndDelete     => it deletes a value and also return the object back
   
//    MyDatabase.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);
// });




// //the challenge to delete 3 fields whose name is Zohaib , using deleteMany
// MyDatabase.collection('Users').deleteMany({name:'Zohaib'}).then((result)=>{
//     console.log(result);
// })

MyDatabase.collection('Users').findOneAndDelete({name:'Wahab'}).then((result)=>{
    console.log(result);
})







   //db.close();
} );



