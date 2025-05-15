const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();
const allowedOrigins = [
  'https://projet-azure.theed.fr',
  'https://calm-mud-0a2b72810.6.azurestaticapps.net'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());
app.use('/api/todos', todosRoutes);

const port = 3000;
const dbUri = "mongodb+srv://esgi:ErardLe2emeCampus@mongoazure.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

mongoose.connect(dbUri)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
