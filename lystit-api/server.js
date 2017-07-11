const express = require('express')  
const app = express()  
const port = 3000
var bodyParser = require('body-parser')
var fs = require('fs');
var mongoose = require('mongoose')

Schema = new mongoose.Schema({
	id : String,
	description: String,
	due_date: String
},{ collection: 'todo' });

Todo = mongoose.model('todo', Schema);
var db;


mongoose.connect('mongodb://heroku_qgcjr9k0:dk9hse1csiu0l52rljicap4vsc@ds153392.mlab.com:53392/heroku_qgcjr9k0', function(error,database){
	if (error) console.error(error);
	else console.log('mongo connected');

Todo = mongoose.model('todo', Schema);
// Todo.find({}, function(err,todo){
// 	console.log('were here');
// 	if(err){
// 		console.log('ERROR:',err)
// 	}else{
// 		console.log('SUCCESS:',todo);
// 	}
// })

});
var todo = new Todo();
var todo = {
	"description":"test",
	"due_date":"1/21/17"
};

/*
todo.save(function(err,results){
	if(err){
		console.log(err);
	}else{
		console.log(results);
	}
})
*/


	var obj;
	fs.readFile('data.json', 'utf8', function (err, data){
		if(err){
			throw err
		}
		for(var i = 0; i < allTodos.length; i++){
			// var obj = JSON.stringify(data.json);

			console.log(obj);
		}

		// allTodos = JSON.parse(obj);
		// console.log(data);
	});
	// console.log(obj);
	


 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Magic is happening on ${port}`)
});



app.get('/todo-app', function(request, response) {  
  response.send('Hello from Express!');
  console.log('route succesfully getting hit');


Todo.find({}, function(err,todo){
	console.log('were here');
	if(err){
		console.log('ERROR:',err)
	}else{
		console.log('SUCCESS:',todo);
	}
})
});


var allTodos = [{
	"description" : "feed the dog",
	"due_date" : "7/5/17",
	"ID" : 1,
},

{
	"description" : "wash the dishes",
	"due_date" : "7/6/17",
	"ID" : 2,
},

{
	"description" : "take out the trash",
	"due_date" : "7/7/17",
	"ID" : 3,
},]


 	


app.get('/get-allTodos', function(request, response){
	response.send(allTodos);
	console.log('this route is being hit',allTodos);
});

app.post('/post-newTodos', function(request, response){
	
	
	var newTodo = request.body;
	allTodos.push(newTodo);
	console.log(allTodos);

});	

 app.post('/post-edit', function(request, response){
 	
 	var requestData = request.body;
 	console.log(request.body);

 	for (var i=0; i<allTodos.length; i++){

 		console.log(allTodos[i].ID);
 		if(allTodos[i].ID==requestData.ID){
 			console.log('breaking into if statement');
 			allTodos[i].description = requestData.description;
 			console.log(allTodos[i]);
 			break;
 		}
 	}


 });



	// response.send(request.body);
	// console.log('this route is being hit');