const mongoose = require('mongoose')

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

// const taskA = new tasks({
//     description: '   clean the house   ',
// })

// taskA.save().then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

module.exports = tasks