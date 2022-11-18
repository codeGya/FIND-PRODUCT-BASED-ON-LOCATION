//const e = require("express")

document.getElementById('items').addEventListener('submit',getCurrentPosition)


async function getCurrentPosition(e)
{

    e.preventDefault()
    const currentLocation=navigator.geolocation.getCurrentPosition(showPosition) 
    
    async function showPosition(x)
    {
        const presentLocation={
            latitude:x.coords.latitude,
            longitude:x.coords.longitude,
            product:document.getElementById("variety").value
        }

        const findYourFavouriteProduct=await axios.post('http://localhost:3000/get/coordinates',presentLocation)
        if(findYourFavouriteProduct.status===200)
        {
            window.alert(findYourFavouriteProduct.data)
        }
        else{
            window.alert(findYourFavouriteProduct.data)
        }
        


    }
           
}