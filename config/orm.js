var connection = require('./connection');

var orm = {
    selectAll = function(table,callback){
        var query = "SELECT * FROM ?";
        connection.query(query,table,function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        })
    },
    insertOne = function(table, columns, values ,callback){
        var query = "INSERT INTO ? ? VALUES ?";
        connection.query(query,table, columns, values, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        })
    },
    updateOne = function(table, column, value , id, callback){
        var query = "UPDATE ? SET ? = ? WHERE id = ?";
        connection.query(query,table, column, value, id, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        })
    },
}