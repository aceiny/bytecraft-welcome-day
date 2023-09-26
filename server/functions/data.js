const Model = require('../db/model')
const ModelT = require('../db/modelT')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const CreateToken = (participant) => {
    return jwt.sign({
        _id:participant._id,
        name:participant.name,
        email:participant.email,
        CNumber:participant.CNumber}
        ,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES})
}
const GetData = async(req,res) => {
    try{
        const {name,email,CNumber} = req.body
        if(!name || !email || !CNumber){
            return res.status(400).json({msg:'Please enter all fields'})
        }
        const newParticipant = await Model.create({name,email,CNumber})
        if(!newParticipant){
            return res.status(400).json({msg:'Something went wrong'})
        }
        const token = CreateToken(newParticipant)
        return res.status(200).json({msg:'Participant added successfully',token})
    }
    catch(err){
        return res.status(400).json({msg:'Something went wrong'})
    }
}
/*const AddRes = async(req,res) => {
    try{
        const {id} = req.user
        console.log(req.user)
        const {response} = req.body
        const participant = await Model.findById(id)
        console.log(participant)
        if(!participant){
            return res.status(400).json({msg:'this participant does not exist '})
        }
        participant.responses.push(response)
        participant.save()
    }catch(err){
        return res.status(200).json({status : "something went wrong"})
    }
}*/
const getToken = async(req,res) => {
    const {id ,name,email, CNumber} = req.user
    try {
        const participant =  await ModelT.create({id,name,email,CNumber})
        if(!participant){
            return res.status(400).json({msg:'Something went wrong'})
        }
        return res.status(200).json({msg:'Participant added successfully'})
    } catch (err) {
        return res.status(400).json({msg:'Something went wrong'})
    }

}
/*const deletedb = async() => {
    await Model.deleteMany({})
    await ModelT.deleteMany({})
    console.log('deleted')
}
deletedb()*/
module.exports = {
    GetData,
    getToken
}