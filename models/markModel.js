const mongoose =require("mongoose")

const markSchema = new mongoose.Schema(
    {
        studentid:{
            type:String,
            required:true
        }
    }
)