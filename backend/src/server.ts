import express from 'express';

const app = express();

app.use(express.json());

// Rota = conjunto
// recurso = usuário
// métodos http = GET, POST, PUT, DELETE

// parâmetros:
// Query params: http://localhost:3333/users?search=alexandre&page=1
// route params: http://localhost:3333/users/1 (identificar um recurso)
// body: http://localhost:3333/users (incluir um recurso)

app.get('/users', (request, response) => {

    return response.json({ message: 'Hello World' });
});

app.listen(3333);