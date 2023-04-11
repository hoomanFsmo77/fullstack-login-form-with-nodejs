const mysql=require('mysql')
const loginFormDB=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login-form'
})

const init = () => {
  loginFormDB.connect((err)=>{
      if(err){
          console.log('error in connecting to database')
      }else{
          console.log('database connected')
      }
  })
}

module.exports={
    init,loginFormDB
}
