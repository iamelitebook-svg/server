const express=require('express')
const mysqlget=require('./database/mysqlget')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())
app.use('/movies',mysqlget)

app.get('/users',(req,res)=>{
    console.log('request')
    return res.send('<h1>Hello</h1>')
})

app.listen(3000,()=>{
    console.log('listening')
})