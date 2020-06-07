const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoDoSchema = new Schema({
    task:  {type: String, trim:true}
},{
    timestamps: true,
});

const Todo = mongoose.model('Todo', TodoDoSchema);
module.exports = Todo