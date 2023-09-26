const express = require('express')
let router = express.Router() // get the router from expresss

const {
    ButtonActivation
        } = require('../functions/participants') // get the function that we will use
const {
    GetData,
    getToken
} = require('../functions/data')
const {
    decodeToken
} = require('../functions/middelware')
router.get('/button',ButtonActivation)
router.route('/participants').post(GetData)
router.post('/rankin',decodeToken,getToken)
module.exports = router //export the router 