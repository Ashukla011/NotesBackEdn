
const express= require('express')
let app=express()
const { connection } = require("./db")
app.use(express.json())
const {NotesRouter} =require("./routes/routes.html")

app.use("/pages",NotesRouter)

app.get("/",(req,res)=>{
    res.send("successful")
})

app.listen(4500, async()=>{
   try{
    await  connection
    console.log("connect to db")
   }
   catch(err){
    console.log(err)
    console.log("somthing is wrong")
   }
    console.log("server listen at 4500")
})