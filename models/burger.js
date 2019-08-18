var orm = require("../config/orm.js");

var burgerOrm = {
  selectAll: function (response) {
    orm.selectAll(function (data) {
      response(data);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (burger_name, response) {
    orm.insertOne(burger_name, function (data) {
      response(data);
    });
  },
  updateOne: function (id, response) {
    orm.updateOne(id, function (data) {
      response(data);
    });
  },
  deleteOne: function (id, response) {
    orm.deleteOne(id, function (data) {
      response(data);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgerOrm;
