const sequelize=require('./database.js')

const Sequelize=require('sequelize')

const shop3=sequelize.define('shop3',{
    id:
    {type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    unique:true,
    primaryKey:true},
    shopname:Sequelize.STRING,
    product:
    {
        type:Sequelize.STRING
    },
    mfg:
    {type:Sequelize.INTEGER},
    price:
    {
        type:Sequelize.INTEGER
    }
})
module.exports=shop3