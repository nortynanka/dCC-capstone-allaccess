require('dotenv').config();
const connectDb = require('./db/db');
const usersRouter = require('./routes/users');
const locationsRouter = require('./routes/locations');
const express = require('express');
const cors = require('cors');
const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(`/api/users`, usersRouter);
app.use(`/api/locations`, locationsRouter);

const port = process.env.PORT || 3013;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});