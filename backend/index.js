const { application, response } = require('express');
const express = require('express');
const app = express();

//Execute: ./node_modules/.bin/nodemon index.js
const notes = [
    {
        "title": "nota 1",
        "content": "nota 1 contentwerwewr",
        },
        {
        "title": "nota 2",
        "content": "nota 2 content",
        },
        {
        "title": "nota 3",
        "content": "nota 3 content",

    }
]
/*const app = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(notes));
})
*/
//Esto nos permitira ir a ciertas direcciones para obtener un determinado dato
app.get('/', (req, res)=>{
    res.send('<h1>Welcome!</h1>');
})
app.get('/api/notes', (req, res)=>{
    res.json(notes);
})
//el ':id' es una manera dinamica de recuperar un segmento del path
app.get('/api/notes/:id', (req, res)=>{
    const id = +req.params.id
    const note = notes.find(note => note.id === id);
    res.json(note);
})
//Express es asincrono por lo que esta es la manera correcta de ponerle.
//La arquitectura REST nos permite construir aplicaciones escalables
const PORT = 3001
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
} )
