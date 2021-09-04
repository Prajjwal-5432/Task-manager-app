require('../src/db/mongoose')
const User = require('../src/models/user')

// 613334bdf86aa8858a7a0ebe

User.findByIdAndUpdate('613334bdf86aa8858a7a0ebe', { age: 12 })
.then(user => {
    console.log(user)
    return User.countDocuments({ age: 12 })
}).then(result => console.log(result))
.catch(err => console.log(err))