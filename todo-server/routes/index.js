var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var {TodoListItem, addTodoListItem, markCompleted} = require('../models/TodoListItem');
mongoose.connect('mongodb://localhost/socialtodo');

router.get('/hello', function (req, res) {
  res.send('Hello World!')
});

/* POST new todo. */
router.post('/newtodo', function(req, res, next) {
  err = addTodoListItem(
	  {
	  	createdBy: req.body.createdBy,
	  	todoText: req.body.todoText,
	    isCompleted: req.body.isCompleted,
	  }
	);
  if (err) {
  	res.json(err);
  }
  res.json({success: true});
});

/* POST mark todo as completed */
router.post('/mark_completed/:id', function(req, res, next) {
  err = markCompleted(req.params.id);
  if (err) {
  	res.json(err);
  }
  res.json({success: true});
});

/* GET all todos for all users */
router.get('/todos', function(req, res, next) {
  TodoListItem.find(function (err, allTodos) {
  if (err) res.json(err);
  res.send(allTodos);
  })
});

/* GET todos for specific user */
router.get('/todos/:userName', function(req, res, next) {
  TodoListItem.find({ createdBy: req.params.userName }, function (err, todosForPerson) {
	  if (err) res.json(err);
	  res.send(todosForPerson)
	})
});

/* GET completed todos for specific user */
router.get('/completed_todos/:userName', function(req, res, next) {
  TodoListItem.find({ createdBy: req.params.userName, isCompleted: true }, function (err, todosForPerson) {
	  if (err) res.json(err);
	  res.send(todosForPerson)
	})
});

/* GET unfinished todos for specific user */
router.get('/unfinished_todos/:userName', function(req, res, next) {
  TodoListItem.find({ createdBy: req.params.userName, isCompleted: false }, function (err, todosForPerson) {
	  if (err) res.json(err);
	  res.send(todosForPerson)
	})
});

/* DELETE remove unfinished todo */
router.delete('/remove_todo/:id', function(req, res, next) {
	console.log(req.params.id);
	TodoListItem.findById( req.params.id, function ( err, item ){
        item.remove( function ( err, item ){
	        if (err) res.json(err);
		  	res.json({success: true});
        });
    });
});


module.exports = router;
