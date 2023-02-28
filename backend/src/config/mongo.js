const mongoose = require('mongoose');
const logger = require('../utils/logger');

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_URI, options)
            .then(() => {
                logger.info('Connected to database')
            })
            .catch(err => {
                logger.error(`An error occurred while connect to database ${err}`)
            })
    }
}

module.exports = new Database();