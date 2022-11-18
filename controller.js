const location=require('./MODELS/location.js')
const shop=require('./MODELS/shop.js')
const shop1=require('./MODELS/shop1.js')
const kitchenItems=require('./MODELS/shop1.js')
const medicines=require('./MODELS/shop2.js')
const generalstore=require('./MODELS/shop3.js')

exports.getCurrentLocation=async (req,res,next)=>{
    const latitude=req.body.latitude
    const longitude=req.body.longitude
    const productName=req.body.product
    console.log(productName,'productName')
    

    const findParticularProduct=await location.findAll({where:{latitude:latitude,longitude:longitude}})
    
    const currentLocation=findParticularProduct[0].locationname
    const findShopName=await shop.findAll({where:{locationname:currentLocation}})
    const shopName=findShopName[0].shopname
    
    let findParticularProductInShop
    if(shopName==='KITCHEN FULFILL')
    {
         findParticularProductInShop=await kitchenItems.findAll({where:{product:productName}})
         

    }
    if(shopName==='MEDICINES')
    {
         findParticularProductInShop=await medicines.findAll({where:{product:productName}})

    }
    if(shopName==='GENERAL STORE')
    {
         findParticularProductInShop=await generalstore.findAll({where:{product:productName}})

    }
    

    
    if(findParticularProductInShop.length>0)
    {
        res.status(200).send(`Product is available at ${currentLocation} in this Particular Shop ${shopName}`)
    }
    else{
        res.send('Product is not found')
    }


    console.log(shopName)

}
