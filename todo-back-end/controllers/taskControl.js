let tasks=[
    {
      id:1,
      Title: "Task 1",
      description: "This is task 1"
    },
    {
        id:2,
        Title: "Task 2",
        description: "This is task 2"
    },
    {
        id:3,
        Title: "Task 3",
        description: "This is task 3"
    }
]
// create a task
exports.createTask=(req,res,next)=>{
    const task=req.body
// Creating new id
    let taskId=tasks.length+1;

    let newTask={ taskId, ...task}
    tasks.push(newTask)
    
    res.status(201).json({
        message: "Task succesfully created",
        task: newTask,
    })
}