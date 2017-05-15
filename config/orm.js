var connection = require("./connection.js");

var orm = {

  selectAll: function(tableIn, callback) {
    var queryString = "SELECT * FROM " + tableIn + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(tableIn, col, value, cb) {
    var queryString = "INSERT INTO " + tableIn;
    queryString += " (";
    queryString += col.toString();
    queryString += "VALUES (";
    queryString += value;
    queryString += ") ";

    connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, colVals, id, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += colVals;
    queryString += " WHERE ";
    queryString += "id = " + id ;//????

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;