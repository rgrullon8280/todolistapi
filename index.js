var express = require('express')
var mongoose = require('Mongoose')
var todoRoutes = require("./routes/todo")
var bodyParser = require("body-parser")

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
    res.sendFile("index.html")
})

app.use("/api/todo", todoRoutes)

app.listen(3000, function(){
    console.log("APP IS RUNNING ON PORT 3000")
})