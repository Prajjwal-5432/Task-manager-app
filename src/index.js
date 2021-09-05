const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Enter an user details
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

//Get all users details
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch(e) {
        res.status(500).send()
    }
})

//Get single user details by ID
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if(!user) return res.status(404).send()
        res.status(200).send(user)
    } catch(e) {
        res.send(500).send()
    }   
})

//Update an User details by ID
app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age', 'password']

    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        
        if(!user) return res.status(404).send()

        res.status(200).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

//Enter task details
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send()
    }
})

//Get all tasks details
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch(e) {
        res.status(500).send()
    }
})

//Get single task details by ID
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task) res.status(404).send()
        res.status(200).send(task)
    } catch(e) {
        res.status(500).send()
    }
})

//Update task details by ID
app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed', 'description']

    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if(!isValidOperation) { 
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if(!task) return res.status(404).send()

        res.status(200).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up and running on port '+ port)
})