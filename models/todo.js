const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoDoSchema = new Schema({
    title:  {type: String, trim: true},
    completed:{type: Boolean}
},{
    timestamps: true,
});

const Todo = mongoose.model('Todo', TodoDoSchema);
module.exports = Todo