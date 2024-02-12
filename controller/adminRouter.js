const express =  require("express")
const bcrypt = require("bcryptjs")
const studentModel = require("../models/studentModel")
const { Model } = require("mongoose")
const viewMarkmodel = require("../models/markModel")

const router=express.Router()

hashpassword=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addstudent",async(req,res)=>{
    let {data} = {"data": req.body}
    let epass = data.password
    hashpassword(epass).then(
        (hashedpass)=>{
           // console.log(hashedpass)
           data.password=hashedpass
           let student= new studentModel(data)
           let result =student.save()
           res.json(
            {
                status:"success"
            }
           )
        }
    )

})

router.get("/viewall",async(req,res)=>{
    let data = await studentModel.find()
    res.json(data)
})

router.get("/viewmark",async(req,res)=>{
    let result = await viewMarkmodel.find()
    .populate("studentid","name rollno admno -_id").exec()
    res.json(result)
})

module.exports=router