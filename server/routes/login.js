const express=require('express')
const db = require("../database");
const loginRoute=express.Router()
const isUserExist = (username,password) => {
    return db.usersData.some((item)=>item.username===username && item.password===password)
}
loginRoute.put('/login',(req,res)=>{
    const checkUser=isUserExist(req.body.username,req.body.password)
    const target=db.usersData.filter(item=>item.username===req.body.username && item.password===req.body.password)[0]
    if(checkUser){
        res.send({
            statusCode:200,
            message:'user exists',
            userId:target.id
        })
    }else{
        res.error()
    }
})



module.exports=loginRoute
