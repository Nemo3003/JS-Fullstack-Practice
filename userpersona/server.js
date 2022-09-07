/*let _ = require('underscore');
let result = _.filter([1,2,3,4,5], (a)=>{return a > 3})
console.log(result)*/
const express = require('express')
//const wiki = require('./wiki.js')
const logger = require('morgan')
const MongoClient = require('mongodb').MongoClient;
const { result } = require('underscore')
const app = express()
const port = 3000
/*
app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.all('/secret', (req, res, next)=>{
    console.log('accesing all secrets')
    next()
    app.use('/wiki', wiki)
})


app.listen(port, ()=>{
    console.log(`App listening on ${port}`)
})
*/
/* ANOTHER WAY
const a_middleware_function = function (req,res,next){
    res.status(404).send('Something went terribly wrong')
    next()
}
app.use(a_middleware_function)

app.use('/someroute', a_middleware_function)

app.get('/', a_middleware_function)

app.listen(3000)*/

MongoClient.connect('mongodb://localhost:27017/animals',
(err,client)=>{
    if(err) throw err;
    

    const db = client.db('animals')
    db.collection('mammals').find().toArray((err,result)=>{
        if(err) throw err;
        console.log(result)
        client.close()
    });
}
)