const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rollno:{
            type:String,
            required:true
        },
        admno:{
            type:String,
            required:true
        },
        collegename:{
            type:String,
            required:true
        },
        parentname:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("addstudent",studentSchema)