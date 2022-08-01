const express = require('express');

const app = express();

app.listen(2058);

let courses = [
    {id: 1, name: 'Reach for the Stars'},
    {id: 2, name: 'From Eve with Love'},
    {id: 3, name: "Cupid Love" }
    ];

app.get('/', (req, res)=>{
    res.send(JSON.stringify(courses));
})

app.get('/courses/:id',(req, res)=>{
    if (req.params.id > courses.length) {
        res.send('<h1>There is no record with this id</h1>')
    } else {
        res.send(JSON.stringify(courses[req.params.id - 1]));
    }
})