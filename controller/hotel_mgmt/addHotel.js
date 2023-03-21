const mongoose = require("mongoose");


const Hotel = require("../../model/hotel");
const City = require("../../model/city");





async function addHotel(req, res){
    // const { hotelName, city, address, roomType, capacity} = req.body;
    // console.log(req.body);
        
    try{

        const newHotel = await new Hotel({
            hotelName: req.body.hotelName,
            city: req.body.city,
            address: req.body.address
        });

        req.body.rooms.map(function(room){
            newHotel.rooms.push(room);
        })
        
    
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
