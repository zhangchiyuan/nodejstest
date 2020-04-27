const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'task_manager';

// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('unabel to connect to db' + err.toString())
    }
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const user_collection = 'user'
    const task_collection = 'task'

    const db = client.db(dbName);
    // const insert_objs = [
    //     { 'name': 'harold', 'age': 30 },
    //     { 'name': 'john', 'age': 30 },
    //     { 'name': 'mary', 'age': 30 },
    //     { 'name': 'jack', 'age': 30 }
    // ]

    // const insert_objs = [
    //     { 'task': 'clean the floor', 'status': 'incomplete' },
    //     { 'task': 'coding', 'status': 'incomplete' },
    //     { 'task': 'prepare cr', 'status': 'incomplete' },
    //     { 'task': 'deploy', 'status': 'incomplete' }
    // ]

    // db.collection(task_collection).insertMany(insert_objs, (error, result) => {
    //     if(error){
    //         return console.log('faile to insert')
    //     }
    //     console.log(result)
    // })

    db.collection(task_collection).deleteMany({
        status: {$eq: 'incomplete'}
    }).then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })

    // db.collection(dbName).updateMany(
    //     {}, 
    //     {'$inc':{
    //         age: 1
    //     }}
    //     ).then((result) => {
    //         console.log(result)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    
    // db.collection('task_manager').find({_id: new ObjectId("5ea12e5b275be498d0a5eb66")}).toArray((err, result)=>{
    //     if(err){
    //         return console.log('error')
    //     }
    //     console.log(result)
    // })
    // db.collection('task_manager').findOne({_id: new ObjectId("5ea12e5b275be498d0a5eb66")}, (err, result) => {
    //     console.log(result)
    // })
    // db.collection('task_manager').insertMany(insert_objs, (error, result) => {
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(result)
    // })
});