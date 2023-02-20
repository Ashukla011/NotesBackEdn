
const express=require("express")
const {NotesModule}=require("../module/module")
const NotesRouter=express.Router()


NotesRouter.post("./html" ,async(req,res)=>{
    let data=res.body;
    try{
        const notes=new NotesModule()
        await notes.save()
        res.send("Question add")
    }catch(err){
        cconsole.log(err)
    }
})

module.exports={
    NotesRouter
}