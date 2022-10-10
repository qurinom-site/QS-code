const express=require('express')
const { userInfo, userQuery } = require('../controller')
const router=express.Router()



//Contact api
router.post('/user-info',userInfo)

router.post('/user-query',userQuery)



module.exports=router