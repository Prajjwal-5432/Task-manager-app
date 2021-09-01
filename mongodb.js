const { MongoClient, ObjectId } = require('mongodb')

const URL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to Database')
    }

    const db = client.db(databaseName)
    
    db.collection('tasks').deleteOne({description: 'Jog 5 km'})
    .then(result => console.log(result))
    .catch(error => console.log(error))

    db.collection('users').deleteMany({age: 21})
    .then(result => console.log(result))
    .catch(error => console.log(error)) 
})