const express = require('express');
const graphHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./schema/schema');
const db = require('./db/db');

const app = express();
app.use(cors());

app.use('/graphql', graphHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));