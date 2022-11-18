const express=require('express')
const router=express.Router()
const controller=require('./controller.js')
//console.log(controller,'i am in controller')
//console.log(module)

router.post('/get/coordinates',controller.getCurrentLocation)

module.exports=router
//console.log(module.exports)