const http = require('http');

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
const app = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(notes));
})

const PORT = 3001
app.listen(PORT)
console.log(`Server listening on port ${PORT}`)