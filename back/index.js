import  express  from "express";
import mongoose from "mongoose";
import cors from "cors"
import FormRouter from "./FormRouter.js";


const app = express()
const connection = mongoose.connect("mongodb://127.0.0.1:27017/form")


app.use(cors())

app.use(express.json())
app.use("/form",FormRouter)


connection.then(()=>{
    app.listen(8080,()=> console.log("server started at 8080"))
})
.catch((err)=> console.log("error"+err))