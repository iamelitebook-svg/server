const {body,validationResult}=require('express-validator')

const rule=[
    body('name').notEmpty().withMessage('enter name'),
    body('year').isNumeric().withMessage('enter year in numbers')
]

const rerr=(req,res,next)=>{
    const err=validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({err:err.array()})
    }
    next()
}
module.exports={
    rule,rerr
}