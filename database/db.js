require('dotenv').config()
const mongoose=require('mongoose')


const MONGO_URI=process.env.MONGO_URI

async function mdb(){
    try{
        await mongoose.connect(MONGO_URI)
        console.log('Mogodb connected')
    }catch(err){
        console.log('db error',err)
    }
}
mdb()

const movSchema=new mongoose.Schema({
    name:{type:String,required:true},
    year:{type:Number,required:true}
})

const Movie=mongoose.model('movielist',movSchema)
module.exports=Movie