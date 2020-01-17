

let mongoose = require('mongoose');
let config = require('./config');

mongoose.admin_panel = mongoose.createConnection(config.database, { useNewUrlParser: true, useFindAndModify: false, poolSize: 100 });
module.exports = mongoose;
