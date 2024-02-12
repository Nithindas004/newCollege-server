const express= require("express")
const markModel= require("../models/markModel")

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

module.exports=router