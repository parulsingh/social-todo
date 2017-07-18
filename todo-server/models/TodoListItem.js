var mongoose = require('mongoose')

var todoListItemSchema = mongoose.Schema({
    createdBy: String,
    todoText: String,
    isCompleted: Boolean,
    timeCreated: { type: Date, default: new Date().toLocaleString() },
    timeCompleted: { type: Date, default: new Date().toLocaleString() },
});

var TodoListItem = mongoose.model('TodoListItem', todoListItemSchema);

function addTodoListItem(data) {
    var item = new TodoListItem(data);
    item.save(function (err) {
    return err;
    })
}

function markCompleted(id) {
    var query = {'_id':id};
    var toChange = {isCompleted : true}
	TodoListItem.findOneAndUpdate(query, toChange, function(err, todo){
	return err;
	});
	var toChange2 = {timeCompleted : new Date().toLocaleString()}
	TodoListItem.findOneAndUpdate(query, toChange2, function(err, todo){
	return err;
	});
}

function handleError(err) {
	console.log(err);
}

module.exports = {TodoListItem, addTodoListItem, markCompleted};
