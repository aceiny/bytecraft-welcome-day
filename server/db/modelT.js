const {Schema,model} = require('mongoose')
TokenSchema =  new Schema({
    id : {
        type:String,
        required:true
    },
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    CNumber : {
        type:Number,
        required:true
    },
})
module.exports = model('Token',TokenSchema)