const jwt = require('jsonwebtoken')
require('dotenv').config()

const decodeToken = (req, res, next) => { // mideelware to decode the token
    const token = req.body.token
    console.log(req.body)
    if(!token) {
        return res.status(401).json({status: 'no token provided'})
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log(payload)
        req.user = {
            id : payload._id,
            name : payload.name,
            email : payload.email,
            CNumber : payload.CNumber,
        }
        next()
    }catch(err){    
        res.status(401).json({status: 'invalid token'})
    }

}
module.exports = {
    decodeToken,
}