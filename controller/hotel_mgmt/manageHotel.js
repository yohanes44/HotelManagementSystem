const mongoose = require("mongoose");


const Hotel = require("../../model/hotel");
const City = require("../../model/city");




async function manageHotel(req, res){
   
    try{
        const hotelFound = await Hotel.findOne({_id: req.params.hotelId});
        if(req.body.hotelName){
            hotelFound.hotelName = req.body.hotelName;
        }
        if(req.body.city){
            hotelFound.city = req.body.city;
        }
        if(req.body.address){
            hotelFound.address = req.body.address;
        }
        if(req.body.phoneNumber){
            hotelFound.phoneNumber = req.body.phoneNumber;
        }
        if(req.body.email){
            hotelFound.email = req.body.email;
        }   
        hotelFound.save();

        const foundCity = await City.findOne({name: hotelFound.city});

        if(!foundCity){
            const newCity = await new City({
                name: hotelFound.city
            })

            await newCity.save();
        }

        if(foundCity){
            await City.findOneAndUpdate(
                { name: foundHotel.city },
                { $addToSet: { hotels: { name: foundHotel.hotelName, 
                                            address: foundHotel.address, 
                                            id: foundHotel._id,
                                        } 
                                } 
                },
                { upsert: true }
            )
    
        }
    
        return res.status(200).json({succuss: true, message: "Hotel Updated succesfully"});
    }
    catch(error){
        return res.status(500).json({success: false, reason: error.message});
    }
}




module.exports = {
    manageHotel
}