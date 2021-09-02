const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewURLParser: true })

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a greater than zero')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Bad password')
            }
        }
    }
})

const me = new User({
    name: 'Prajjwal',
    email: 'Prajjwal@test.com',
    password: '123@123',
    age: 21
})

me.save().then(me => console.log(me))
.catch(error => console.log('Error! ', error)) 

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const newTask = new Task({
    description: 'Charge mobile phone'
})

newTask.save().then(task => console.log(task))
.catch(error => console.log(error))