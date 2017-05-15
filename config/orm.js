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
    queryString += col;
    queryString += ") VALUES (?)";

    connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, id, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += "devoured = true";
    queryString += " WHERE ";
    queryString += "id = " + id ;//????

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;