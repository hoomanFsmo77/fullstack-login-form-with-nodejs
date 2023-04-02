const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
//// routes
const registerRoute=require('./routes/register')
const loginRoute=require('./routes/login')
const meRoute=require('./routes/me')

//// app
const app=express()
app.use(bodyParser.json())
app.use(cors())




app.use('/api/user',registerRoute)
app.use('/api/user',loginRoute)
app.use('/api/user',meRoute)

app.listen(9001,()=>console.log('server is running on port 9001'))