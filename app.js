const express=require('express')
const cors=require('cors')
const app=express()
const shop1=require('./MODELS/shop1.js')
const shop2=require('./MODELS/shop2.js')
const shop3=require('./MODELS/shop3.js')
const location=require('./MODELS/location.js')
const shop=require('./MODELS/shop.js')

const router=require('./router.js')
const sequelize=require('./MODELS/database')
app.use(cors())
app.use(express.json())



location.hasMany(shop)
shop.belongsTo(location)

synchronizing()

async function synchronizing()
{
    await sequelize.sync()
}

app.use(router)

app.listen(3000)