const express=require('express')
const database=require('../database')
const loginRoute=express.Router()




loginRoute.post('/register',(req,res)=>{
    const password=req.body.password
    const username=req.body.username
    if( password.length > 8 && username.length>2){
        const registerQuery=`INSERT INTO users VALUES(NULL,"${username}",${Number(password)})`
        database.loginFormDB.query(registerQuery,(err,response)=>{
            if(err){
                res.send('error in connecting to database')
            }else{
                res.send({
                    statusCode:200,
                    message:'user created',
                    userId:response.insertId
                })
            }
        })
    }else{
        res.send('password must be at least 8 characters and user must contain at least 2 characters')
    }

    // if(!checkUser){
    //     const randomNumber=Math.floor(Math.random()*300)
    //       db.usersData.push({
    //             password: req.body.password,
    //             username: req.body.username,
    //            id:randomNumber
    //       })
    //       res.send({
    //           statusCode:200,
    //           message:'user created',
    //           userId:randomNumber
    //       })
    // }else{
    //     res.error()
    // }

})



module.exports=loginRoute