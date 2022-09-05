/*let _ = require('underscore');
let result = _.filter([1,2,3,4,5], (a)=>{return a > 3})
console.log(result)*/
const express = require('express')
const wiki = require('./wiki.js')
const app = express()
const port = 3000

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
