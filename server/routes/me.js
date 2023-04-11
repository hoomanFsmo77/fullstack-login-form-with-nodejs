const express=require('express')
const database = require("../database");
const meRoute=express.Router()



meRoute.get('/me/:id',(req,res)=>{
    const userId=req.params.id
    if(userId){
        const getUserInfo=`SELECT * FROM users WHERE id=${userId}`
        database.loginFormDB.query(getUserInfo,(err,response)=>{
            if(err){
                res.send({
                    statusCode:404,
                    message:'user not found!'
                })
            }else{
                if(response.length>0){
                    res.send({
                        statusCode:200,
                        userData:response[0]
                    })
                }else{
                    res.send({
                        statusCode:404,
                        message:'user not found!'
                    })
                }

            }

        })
    }else{
        res.send({
            statusCode:501,
            message:'missing required id!'
        })
    }

})



module.exports=meRoute