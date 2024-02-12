const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const adminroute= require("./controller/adminRouter")
const studentRoute = require("./controller/studentRouter")

const app=express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nithindas1234:1234nith@cluster0.lvn9hia.mongodb.net/adstcollegeDb?retryWrites=true&w=majority",
{useNewUrlParser: true})

app.use("/api/college",adminroute)
app.use("/api/student/",studentRoute)

app.listen(3001,()=>{
    console.log("Server Running")
})