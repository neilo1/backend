import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import {database_connection} from './Config/db- connection.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();

// view engine setup
app.set('view engine', 'jade');

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
// app.use('/', (req, res) => {
//   res.json('Hello World');
// });

app.use('/api/users', userRouter);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// DB connection
database_connection();

export default app;
