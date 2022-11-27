const express= require("express")
const cors=require("cors")
const taskRoutes=require("./routes/taskRoutes")
const port=8000;


//create global app object
const app=express();
//handle cors error
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//handle initial route.
app.get("/", (req,res)=>{
 res.json({message: "Hello and Welcome to Task Manager!"})
});
//handle routes
app.get("/", (req,res)=>{
    res.json({message: "Hello and welcome to Task Mangager!"})
})
app.use("/tasks", taskRoutes)

app.use((req,res,next)=>{
    const err=newError("Route not found")
    error.status=404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message,
    });
  });
//start port
app.listen(port,()=>{
    console.log(`app listening on port ${8000}`)
})
