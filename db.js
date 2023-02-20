const mongoose=require("mongoose")
mongoose.set("strictQuery",false)
 const connection=mongoose.connect("mongodb+srv://shuklavashu9696:super30shukla@cluster0.vgaaugu.mongodb.net/AllIMPNotes?retryWrites=true&w=majority")


 module.exports={
    connection
 }