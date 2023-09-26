
const ButtonActivation = (req,res) => {
    try{
        const activate = true
        return res.status(200).json({activate})
    }catch(err){

    }
}
module.exports = { //exportin functions to use in the router
    ButtonActivation
}