const sequelize=require('./database.js')

const Sequelize=require('sequelize')

const shop=sequelize.define('shop',{
    id:
    {type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    unique:true,
    primaryKey:true},
    shopname:Sequelize.STRING,
    locationname:Sequelize.STRING
   
})
module.exports=shop