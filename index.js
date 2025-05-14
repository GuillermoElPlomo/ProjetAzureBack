require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todosRoutes);

const port = process.env.PORT || 3000;
const dbUri = process.env.MONGO_URI;

mongoose.connect(dbUri).then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
