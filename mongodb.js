const { MongoClient, ObjectId } = require('mongodb')

const URL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to Database')
    }

    const db = client.db(databaseName)
    
    db.collection('users').updateOne({
        _id: ObjectId("612f47dc9037e8e9cb12f0d4")
    }, {
        $inc: {
            age: 1
        }
    }).then(result => console.log(result))
    .catch(error => console.log(error))

    db.collection('tasks').updateMany({
        completed: true
    }, {
        $set: {
            completed: false
        }
    }).then(result => console.log(result))
    .catch(error => console.log(error))
})