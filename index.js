const express = require('express');

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: 'Student A'
    },
    {
        id: 2,
        name: 'Student B'
    }
];

app.get('/students', (request, response) => {
    return response.json(students);
});

app.get('/students/:id', (request, response) => {
    const id = request.params.id;
    const student = students.filter(value => value.id == id);
    return response.json(student);
});

app.post('/students', (request, response) => {
    const student = request.body;
    students.push(student);
    return response.json(students);
});

app.put('/students/:id', (request, response) => {
    const id = request.params.id;
    const name = request.body.name;
    
    const student = students.filter(value => value.id == id);
    student[0].name = name;

    return response.json(student[0]);
});

app.delete('/students/:id', (request, response) => {
    const id = request.params.id;

    students = students.filter(value => value.id != id);

    return response.json(students);
});

app.listen(3001, () => {
    console.log('Server started in port 3001');
});