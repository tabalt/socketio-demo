var chatroomSql = {
  insert:'INSERT INTO chatroom(id,name) VALUES(null,?)',
  update:'update chatroom set name=? where id=?',
  delete: 'delete from chatroom where id=?',
  queryById: 'select * from chatroom where id=?',
  queryAll: 'select * from chatroom'
};

var db = require('./database');
var chatroom = function() {};

chatroom.prototype.findById = function(id, callback) {
    var sql = "SELECT * FROM chatroom WHERE id =?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            info = {}
            if (results.length > 0) {
                info = results[0]
            }
            callback(false, info);
        });
    });
};

chatroom.prototype.select = function(callback) {
    var sql = "SELECT * FROM chatroom ";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};

module.exports = chatroom;