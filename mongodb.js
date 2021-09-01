const { MongoClient, ObjectId } = require('mongodb')
//const MongoClient = mongodb.MongoClient

const URL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to Database')
    }

    const db = client.db(databaseName)
    /* db.collection('users').insertOne({
        _id: id,
        name: 'Prajjwal Sahu',
        age: 21
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert');
        }

        console.log(result.insertedId);
    }) */

    /* db.collection('users').insertMany([
        {
            name: 'Jan',
            age: 30
        },
        {
            name: 'Michael',
            age: 35  
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert');
        }
        console.log(result.insertedIds);
    }) */
    /* db.collection('tasks').insertMany([
        {
            description: 'Bring medicine',
            completed: true
        },
        {
            description: 'Jog 5 km',
            completed: false
        },
        {
            description: 'Cut Grass',
            completed: true
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert');
        }
        console.log(result.insertedIds);
    }) */
})
//node mongodb.js