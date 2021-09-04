require('../src/db/mongoose')
const Task = require('../src/models/task')

// 61332cce9989441302cdf71d

Task.findByIdAndDelete('61332cce9989441302cdf71d')
.then(task => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then(count => console.log(count))
.catch(err => console.log(err))