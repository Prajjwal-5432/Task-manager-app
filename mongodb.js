const { MongoClient, ObjectId } = require('mongodb')

const URL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to Database')
    }

    const db = client.db(databaseName)
    
     db.collection('users').findOne({ _id: ObjectId("612e04206c9041622738f7cf") }, (error, user) => {
        if(error) {
            return console.log('Cannot find the user');
        }
        console.log(user);
    }) 

    db.collection('tasks').find({ completed: false }).forEach(doc => {
        console.log(doc);
    });
})