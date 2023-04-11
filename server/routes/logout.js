const express=require('express')
const logoutRoute=express.Router()
const database=require('../database')

logoutRoute.delete('/logout/:id',(req,res)=>{
    const userId=Number(req.params.id)
    if(userId){
        const deleteQuery=`DELETE FROM users WHERE id=${userId}`
        database.loginFormDB.query(deleteQuery,(error,response)=>{
            res.send({
                statusCode:200,
                message:'user removed'
            })
        })

    }else{
        res.send({
            statusCode:500,
            message:'missing require id'
        })
    }



})





module.exports=logoutRoute
