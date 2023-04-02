const express=require('express')
const db = require("../database");
const meRoute=express.Router()

meRoute.get('/me/:id',(req,res)=>{
    const userId=req.params.id
    if(userId){
        const target=db.usersData.filter(item=>item.id===Number(userId))[0]
        if(target){
            res.send(target)
        }else{
            res.error()
        }
    }else{
        res.error()
    }

})



module.exports=meRoute