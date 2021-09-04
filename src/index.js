const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Enter an user details
app.post('/users', (req, res) => {
    const user = new User(req.body)
    
    user.save().then(() => res.status(201).send(user))
    .catch(error => res.status(400).send(error))

})

//Get all users details
app.get('/users', (req, res) => {
    User.find({}).then(users => res.status(200).send(users))
    .catch(error => res.status(500).send())
})

//Get single user details by ID
app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user) return res.status(404).send()

        res.send(user)
    })
    .catch((e) => res.status(500).send())
})

//Enter task details
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => res.status(201).send(task))
    .catch(error => res.status(400).send(error))
})

app.listen(port, () => {
    console.log('Server is up and running on port '+ port)
})