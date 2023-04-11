const express=require('express')
const database = require("../database");
const loginRoute=express.Router()


loginRoute.put('/login',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const getUserQuery=`SELECT id FROM users WHERE username="${username}" AND password=${password}`
    database.loginFormDB.query(getUserQuery,(err,response)=>{
        if(response){
            res.send({
                        statusCode:200,
                        message:'user exists',
                        userId:response[0].id
            })
        }else{
            res.send({
                statusCode:404,
                message:'user no found exists',
            })
        }
    })
})



module.exports=loginRoute
