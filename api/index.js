const express = require('express')

const app = express()

//Some redis
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

//routes
app.get('/jobs', async (req,res) => {
    const jobs = await getAsync('github')

    return res.send(jobs)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`express is up and running on ${PORT}`))