const express = require('express')
require('./db/mongoose')
const User = require('./model/user')
const Task = require('./model/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((err)=>{
        res.statusCode = 400
        res.send(err)
    })
    // res.send('testing!')
})

app.get('/user', (req, res) => {
    User.find({}).then((re)=>{
        res.send(re)
    }).catch((err)=>{
        res.send(err)
    })
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    User.findById(req.params.id).then((user)=>{
        if(!user){
            res.status(404).send()
        }
        else{
            console.log(user)
            res.send(user)
        }        
    }).catch((err)=>{
        console.log(err)
        res.status(404).send()
    })
})

app.post('/task', (req, res)=>{
    console.log(req.body)
    const task = new Task(req.body)
    task.save().then(()=>{
        res.send(task)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/task', (req, res)=>{
    Task.find({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    })
})

app.get('/task/:id', (req, res)=>{
    Task.findById(req.params.id).then((task)=>{
        if(task){
            res.send(task)
        }
        else{
            res.status(404).send()
        }
    }).catch((e)=>{
        res.status(500).send(e)
    })
})


app.listen(port, ()=>{
    console.log('server is running on ' + port)
})