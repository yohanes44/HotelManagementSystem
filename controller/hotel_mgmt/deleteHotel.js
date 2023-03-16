const mongoose = require("mongoose");


const Hotel = require("../../model/hotel");
const City = require("../../model/city");




async function deleteHotel(req, res){


        try{
              
            await Hotel.findOneAndDelete({_id: req.params.hotelId});
            return res.status(200).json({success: true, message: "Hotel Deleted Succesfully"});
        
        }
        catch(error){
            if(error){
                return rs.status(500).json({success: false, reason: error.message});
            }
        }

    
}



module.exports = {
    deleteHotel
}