var express = require('express')
var router = express.Router()
var Todo = require("../models/todo")

router.get("/", (req, res)=> {
    Todo.find()
    .then(response =>res.json(response))
    .catch(err=> res.status(400).json("Error: " + err))
})

router.post("/add", (req, res)=> {
    const {task, completed } = req.body

    const newTask = new Todo({
        task,
        completed
    });

    newTask.save()
    .then(()=> res.json("Task Added! "))
    .catch(err=> res.status(400).json("Error: " + err))

})


module.exports = router