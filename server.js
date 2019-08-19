// var express = require("express");
// var PORT = process.env.PORT || 8080;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller");

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });


//set dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//use app for an express call
const app = express();

//Set port, process.env.PORT for heroku, 3000 for local machine
const PORT = process.env.PORT || 8080;

//uese method override for forum PUT and DELETE queries
app.use(methodOverride("_method"));

//set engine and default for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}) );
app.set("view engine", "handlebars");

//set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//serve static content from the public directory
app.use(express.static(__dirname + "/public"));

//require burgers-controller,js for the routes
const routes = require("./controllers/burgers_controller");

app.use("/", routes);
app.use("/:id", routes);

//Initiate the listener
app.listen(PORT, function(){
  console.log("http://localhost:" + PORT);
});