const mongoose = require("mongoose");


const Hotel = require("../../model/hotel");
const City = require("../../model/city");





async function addHotel(req, res){
    const { hotelName, city, address} = req.body;
    console.log(req.body);
        
    try{
        const newHotel = await new Hotel({
            hotelName: hotelName,
            city: city,
            address: address,
            // phoneNumber: phoneNumber,
            // email: email,
       
        });
    
        await newHotel.save();

         await City.findOneAndUpdate(
            { name: newHotel.city },
            { $addToSet: { hotels: { name: newHotel.hotelName, 
                                        address: newHotel.address, 
                                        id: newHotel._id,
                                    } 
                            } 
            },
            { upsert: true }
        )

       return res.status(200).json({success: true, message: "Hotel added succesfully", newHotel});
    }
    catch(error){
        if(error){
            return res.status(500).json({success: false, reason: error.message})
        }
    }

}



module.exports = {addHotel};
