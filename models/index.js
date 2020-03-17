var mongoose = require('mongoose');
mongoose.set('debug',true);

mongoose.connect('mongodb://localhost/todo-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err){
    if(err) {
        console.log(err);
    } else {
        console.log("Connection Successful");

    }
});
mongoose.Promise = global.Promise;

module.exports.Todo = require("./todo")