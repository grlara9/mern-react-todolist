var express = require('express')
var router = express.Router()
var Todo = require("../models/todo")

router.get("/", (req, res)=> {
    Todo.find()
    .then(response =>res.json(response))
    .catch(err=> res.status(400).json("Error: " + err))
})

router.post("/add", (req, res)=> {
   

    const newTask = new Todo({
        task: req.body.task
     }); 

    newTask.save()
    .then(()=> res.json("Task Added! "))
    .catch(err=> res.status(400).json("Error: " + err))

})

router.delete("/:id", (req, res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Task Done"))
    .catch(err=>res.status(400).json("Error: " + err))
})


module.exports = router