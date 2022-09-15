const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://nemo3003:<password>@cluster0.prrlwu2.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));