var express = require("express");
var handlebars = require("express-handlebars");
var routes = require("./controllers/burger_controller");

var db = require('./models');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync().then(function (){
  app.listen(PORT, function() {

    console.log("Server listening!");
  });
})

