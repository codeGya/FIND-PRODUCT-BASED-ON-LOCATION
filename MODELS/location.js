const sequelize=require('./database.js')
const Sequelize=require('sequelize')

const location=sequelize.define('location',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
       unique:true,
       primaryKey:true
    },
    locationname:Sequelize.STRING,
    latitude:Sequelize.STRING,
    longitude:Sequelize.STRING
})
module.exports=location