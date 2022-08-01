const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/Error.middleware');
const dardosRouter = require('./Routes/Dardos.routes');
const hidratacaoRouter = require('./Routes/Hidratacao.routes');
const pesoRouter = require('./Routes/Peso.routes');
const yogaRouter = require('./Routes/Yoga.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/yoga', yogaRouter);
app.use('/dardos', dardosRouter);
app.use('/hidratacao', hidratacaoRouter);
app.use('/peso', pesoRouter);

app.use(errorMiddleware);
module.exports = app;
