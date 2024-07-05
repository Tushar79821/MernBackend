require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes= require('./routes/workouts')

//express app
const app = express()

//middlewarec
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes) // first arg is for path, second is for route
//for example http://localhost:3000/api/workouts/hello or http://localhost:3000/api/workouts/hi etc

//connect to db
mongoose.connect(process.env.MONGO_URI, )
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () =>{
            console.log("Connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("There was an error :",error)
    })

