const request = require('supertest')
const app = require('../src/app')

test('should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "Prajjwal sahu",
        email: "prajjwalsahu2345@gmail.com",
        password: "prapra"
    }).expect(201)
})