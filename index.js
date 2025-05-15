require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todosRoutes);

const port = 3000;
const dbUri = "mongodb+srv://esgi:ErardLe2emeCampus@mongoazure.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

mongoose.connect(dbUri).then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
