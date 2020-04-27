const mongoose = require('mongoose')
const validator = require('validator')
const assert = require('assert')

mongoose.connect(
    'mongodb://localhost:27017/task-manager-api', 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
);