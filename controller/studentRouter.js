const express= require("express")
const bcrypt = require("bcryptjs")
const markModel= require("../models/markModel")
const studentModel=require("../models/studentModel")

const router=express.Router()

router.post("/addmark",async(req,res)=>{
    let input=req.body
    let mark=new markModel(input)
    let result=await mark.save()
    res.json(
        {
            status:"success"
        }
    )
})

router.post("/loginstud",async(req,res)=>{
    let semail=req.body.email
    let spass=req.body.password
    let data= await studentModel.findOne({"email":semail})
    //console.log(data)
    if (!data) {
        return res.json(
            {
                status:"Invalid Email"
            }
        )
    }
    let dbpass=data.password
    //console.log(data.password)
    const match= await bcrypt.compare(spass,dbpass)
    //console.log(match)
    if (!match) {
        return res.json(
            {
                status:"Incorrect Password"
            }
        )
    } else {
        return res.json(
            {
                status:"success"
            }
        )
    }
})

module.exports=router