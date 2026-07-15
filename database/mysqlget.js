const express = require('express')
const pool = require('./mysql')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * from movielist')
        res.json(rows)
    } catch (err) {
        console.log(err)
        res.send('query failed')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dbid = req.params.id
        const [rows] = await pool.query('SELECT * from movielist where id=?', [dbid])
        if (rows.length === 0) {
            return res.status(404).send('not found')
        }
        res.json(rows[0])
    } catch (err) {
        console.log(err)
        res.send('query failed')
    }
})

router.post('/',async(req,res)=>{
    try{
        const {name,year}=req.body
        const [result]=await pool.query(
            'insert into movielist (name,year) values (?,?)',[name,year]
        )
        res.status(201).json({
            msg:'created',
            data:{
                id:result.insertId,
                name:name,
                year:year
            }
        })
    }
    catch(err){
        res.status(500).send('mysql error')
    }
})

module.exports=router