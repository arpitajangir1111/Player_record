import  express  from "express";
import FormModel from "./FormModel.js";


const FormRouter = express.Router();

FormRouter.get("/",async(req,res)=>{
    const result = await FormModel.find()
    res.json(result)
})

FormRouter.post("/add", async(req,res)=>{
    const formToAdd = new FormModel(req.body)
    let result = await formToAdd.save()
    res.json(result)
})



export default FormRouter