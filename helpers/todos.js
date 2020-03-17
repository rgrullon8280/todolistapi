var db = require('../models');

exports.getToDos = function(req, res) {
    db.Todo.find()
      .then(function(todos) {
        res.json(todos);
      })
      .catch(function(err) {
        res.send(err);
      });
  }

  exports.createToDo = function(req, res) {
    console.log(req.body);
    db.Todo.create(req.body)
      .then(function(newTodo) {
        res.status(201).json(newTodo);
      })
      .catch(err => {
        res.send(err);
      });
  }

  exports.getToDo = function(req, res) {
    db.Todo.findById(req.params.todoId)
      .then(function(foundTodo) {
        res.json(foundTodo);
      })
      .catch(function(err) {
        res.send(err);
      });
  }
  exports.updateToDo = function(req, res) {
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, {
      useFindAndModify: false
    })
      .then(function(todo) {
        res.json(todo);
      })
      .catch(function(err) {
        console.log("ERRRR");
        res.send(err);
      });
  }
  exports.deleteToDo = function(req, res) {
    db.Todo.deleteOne({ _id: req.params.todoId })
      .then(() => res.json({message: "We Deleted It!!"}))
      .catch((err) => res.send(err));
  }

module.exports = exports;