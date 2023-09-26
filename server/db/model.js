const {Schema,model} = require('mongoose')
const ParticipantsSchema = new Schema({
    name: {
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
module.exports = model('Participants'/*collection name in the database*/,ParticipantsSchema/*schema to use on it*/)