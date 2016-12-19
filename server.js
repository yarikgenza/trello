import express from 'express';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import bodyParser from 'body-parser';
import config from './config';
import session from 'express-session';
import morgan from 'morgan'

const app = express();
const {port, database, secret} = config;

import taskRoutes from './routes/task.js';
import rowRoutes from './routes/row.js'
import authRoutes from './routes/auth.js';
import checkToken from './middlewares/checkToken.js';
import getUser from './middlewares/getUser.js';
import errorHandler from './middlewares/errorHandler.js';

mongoose.Promise = bluebird;
mongoose.connect(database, (err) => {
  if(err) throw err;
  console.log('Connected to DB');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secret
}))
app.use(morgan('tiny'));


app.use('/api', authRoutes);
app.use('/api', checkToken, getUser, rowRoutes);
app.use('/api', checkToken, getUser, taskRoutes);

app.listen(port, () => {
  console.log(`Listening at ${port}...`);
})

app.use(errorHandler);
