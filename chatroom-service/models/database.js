var mysql = require('mysql');
var dbConf = require('../conf/db');

var pool = mysql.createPool(dbConf.mysql);

exports.pool = pool;