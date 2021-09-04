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
    User.findById(_id).then(user => {
        if(!user) return res.status(404).send()

        res.send(user)
    })
    .catch(e => res.status(500).send())
})

//Enter task details
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => res.status(201).send(task))
    .catch(error => res.status(400).send(error))
})

//Get all tasks details
app.get('/tasks', (req, res) => {
    Task.find({}).then(tasks => res.status(200).send(tasks))
    .catch(error => res.status(500).send())
})

//Get single task details by ID
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then(task => {
        if(!task) return res.status(404).send()
        
        res.send(task)
    })
    .catch(e => res.status(500).send())
})

app.listen(port, () => {
    console.log('Server is up and running on port '+ port)
})