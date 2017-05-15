var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },

  insert: function(val, cb) {
    orm.insertOne("burgers", "burger_name", val, function(res){
      cb(res);
    });
  },

  update: function(val, id, cb) {
    orm.updateOne("burgers", val, id, function(res){
      cb(res);
    });
  }
};

module.exports = burger;