import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// recurso = usuário
// métodos http = GET, POST, PUT, DELETE

// parâmetros:
// Query params: http://localhost:3333/users?search=alexandre&page=1
// route params: http://localhost:3333/users/1 (identificar um recurso)
// body: http://localhost:3333/users (incluir um recurso)

app.listen(3333);

// base de dados: driver nativo, query builder, ORM, usaremos ORM