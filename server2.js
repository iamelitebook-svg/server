const express=require('express')
const dbget=require('./database/dbget')
const cors=require('cors')
require('./database/db')

const app=express()
app.use(cors())
app.use(express.json())
app.use('/users',dbget)
 
app.get('/users',(req,res)=>{
    console.log('request')
    return res.send('<h1>Hello</h1>')
})

app.listen(3000,()=>{
    console.log('listening')
})