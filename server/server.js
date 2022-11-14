// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import { Task } from './db/models';

// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const { Task } = require('./db/models');

// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT ?? 3005;

// app.use(cors());
// app.use(morgan('dev'));

// app.use(express.json());

// app.listen(PORT, () => {
//   console.log('server start on port ', PORT);
// });

// app.post('/api/tasks', async (req, res) => {
//   const { input } = req.body;
//   const newTask = await Task.create({ title: input });
//   res.json(newTask);
// });

// app.get('/api/tasks', async (req, res) => {
//   const tasks = await Task.findAll();
//   res.json(tasks);
// });

// app.delete('/api/tasks/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Task.destroy({ where: { id } });
//     res.sendStatus(200);
//   } catch (e) {
//     console.error(e);
//     res.sendStatus(500);
//   }
// });

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { Task } = require('./db/models');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(PORT, () => console.log(`Started on port ${PORT}`));

app.post('/api/tasks', async (req, res) => {
  const { input } = req.body;
  const newPost = await Task.create({ title: input });
  res.json(newPost);
});

app.get('/api/tasks', async (req, res) => {
  const posts = await Task.findAll();
  res.json(posts);
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});
app.put('/api/task/:id', async (req, res) => { // status true/fasle checkbox
  const { id } = req.params;
  const task = await Task.findByPk(id);
  task.status = !task.status;
  task.save();
  res.sendStatus(200);
});
