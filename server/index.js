const express = require('express');
const graphHTTP = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphHTTP({
    schema
}));

const PORT = 4000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));