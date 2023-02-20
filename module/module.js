const mongoose=require('mongoose')

const NotesSchema=mongoose.Schema({
    Question:String,
    QuestionContent:String
})

const NotesModule= mongoose.model('Notes',NotesSchema)

module. exports={
    NotesModule
}