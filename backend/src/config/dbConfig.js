const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://douglas:naovouesquecer420@cluster0.9q2xtxn.mongodb.net/?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;