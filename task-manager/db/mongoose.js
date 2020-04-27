const mongoose = require('mongoose')
const validator = require('validator')
const assert = require('assert')

mongoose.connect(
    'mongodb://localhost:27017/task-manager-api', 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
);

const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true,
        require: true
    },
    age: {
        type: Number,
        default: 18
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: (value)=>{
            if(!validator.isEmail(value)){
                throw new Error('email is invalid')
            }
        }

    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: (value)=>{
            assert(value.length > 6, 'password must be more than 6 digits')
            assert(value.indexOf('password')==-1, 'password cannot contain word password')
        }
    }
})

// const me = new User({
//     name: '   harold   ',
//     email: 'some@aaa.com   ',
//     password: 'aviosdf'
// })

// me.save().then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

const tasks = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false
    }
})

const taskA = new tasks({
    description: '   clean the house   ',
})

taskA.save().then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

