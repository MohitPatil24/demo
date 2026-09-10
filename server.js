import express from "express"
import sum from "./sum.js";

const app = express();

app.get("/",async(req,res)=>{
    res.json({
        mes : "I am Root"
    })
})
app.get("/getsum/:a/:b",async(req,res)=>{
    const {a,b} = req.params;
    console.log(sum(parseInt(a),parseInt(b)))
})

app.listen(8000,()=>{
    console.log(`Server is listening to port 8000`);
})