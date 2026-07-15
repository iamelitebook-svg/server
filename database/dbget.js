const express=require('express')
const db=require('./db')
const router=express.Router()

router.get('/',async(req,res)=>{
    try{
        const movie=await db.find()
        res.json(movie)
    }catch(err){
        res.status(500).send('db query failed')
    }
    
})

router.get('/:id',async(req,res)=>{
    try{
        const dbid=req.params.id
        const singleMovie=await db.findById(dbid,{name:1,_id:0})
        if(!singleMovie){
            return res.status(404).send('movie not found')
        }
        res.json(singleMovie)
    }catch(err){
        res.status(500).send('movie id error')
    }
})

router.post('/',async(req,res)=>{
    try{
        const {name,year}=req.body
        const newMovie=await db.create({name,year})
        res.status(201).json({msg:'created',data:newMovie})
    }catch(err){
        res.status(500).send('failed to create')
    }
})

// router.get('/',(req,res)=>{
//     res.send('db data')
// })
module.exports=router