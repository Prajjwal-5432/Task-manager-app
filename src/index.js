const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.status(400).send('Get request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Service temporary unavailable')
// })

app.use(express.json())

app.use(userRouter)

app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})