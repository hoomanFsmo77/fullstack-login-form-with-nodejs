const http=require('http')
const url=require('url')
const usersData=[
    {username:'hooman_77',password:'1234'}
]
const isUserExist = (username,password) => {
  return usersData.some((item)=>item.username===username && item.password===password)
}


const server=http.createServer((
    req,res)=>{
    const parseUrl=url.parse(req.url,true)
    const checkUser=isUserExist(parseUrl.query.username,parseUrl.query.password)
    if(parseUrl.pathname==='/api/user/login'){
        if(checkUser){
            res.write(JSON.stringify({
                statusCode:200,
                message:'user exists'
            }))
            res.end()
        }else{
            res.write(JSON.stringify({
                statusCode:404,
                message:'user does not exist'
            }))
            res.end()
        }
    }else if(parseUrl.pathname==='/api/user/register'){
        if(!checkUser){
            usersData.push({
                password: parseUrl.query.password,
                username: parseUrl.query.username
            })
            res.write(JSON.stringify({
                statusCode:200,
                message:'user created'
            }))
            res.end()
        }else{
            res.write(JSON.stringify({
                statusCode:500,
                message:'user exists!'
            }))
            res.end()
        }
    }
})

server.listen(9001)
