require('dotenv').config()
const mysql=require('mysql2/promise')

const pool=mysql.createPool({
    host:process.env.DB_host,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

async function testDb(){
    try{
        const connection=await pool.getConnection()
        console.log('MySQL Connected')
        connection.release()
    }catch(err){
        console.log('db connection error',err.message)
    }
}
testDb()

module.exports=pool