// Set up MySQL connection.
var mysql = require("mysql");
var express = require("express");
var connection;
//JAWSDB for Heroku deployment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;


// Export connection for our ORM to use.
module.exports = connection;
