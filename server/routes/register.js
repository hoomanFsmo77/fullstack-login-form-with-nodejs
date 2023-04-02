const express=require('express')
const db=require('../database')
const loginRoute=express.Router()
const isUserExist = (username,password) => {
  return db.usersData.some((item)=>item.username===username && item.password===password)
}
loginRoute.post('/register',(req,res)=>{
    const checkUser=isUserExist(req.body.username,req.body.password)
    console.log(checkUser)
    if(!checkUser){
        const randomNumber=Math.floor(Math.random()*300)
          db.usersData.push({
                password: req.body.password,
                username: req.body.username,
               id:randomNumber
          })
          res.send({
              statusCode:200,
              message:'user created',
              userId:randomNumber
          })
    }else{
        res.error()
    }

})



module.exports=loginRoute