const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Person = new Schema({
    name: String,
    bdate: Number
})
//Lets compile the module to schema
const PersonSchema = mongoose.model('PersonSchema', Person)