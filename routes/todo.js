var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos")

router.route("/")
.get(helpers.getToDos)
.post(helpers.createToDo)

router.route("/:todoId")
.get(helpers.getToDo)
.put(helpers.updateToDo)
.delete(helpers.deleteToDo)

module.exports = router;
