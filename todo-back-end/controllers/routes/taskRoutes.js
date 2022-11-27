const express=require("express");
const router=express.Router();

const taskController= require("../controllers/taskControl")
// create task route
 http://localhost:8000/tasks/create
router.post("/create", taskController.createTask)

module.exports=router