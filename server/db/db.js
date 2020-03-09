const mongoose = require('mongoose');

const config = require('../config/config');

mongoose.Promise = global.Promise;

const URI = `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASS}@cluster0-l6dcn.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('DB Connected'));

module.exports = mongoose;