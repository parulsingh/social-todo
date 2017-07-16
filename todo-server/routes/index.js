var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var {TodoListItem, addTodoListItem} = require('../models/TodoListItem');
mongoose.connect('mongodb://localhost/socialtodo');

router.get('/hello', function (req, res) {
  res.send('Hello World!')
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST new todo. */
router.post('/newtodo', function(req, res, next) {
  console.log(req.body);
  console.log(req)
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
  res.send('Todo added!');
});

module.exports = router;
