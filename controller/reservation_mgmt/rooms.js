const mongoose = require("mongoose");


const Hotel = require("../../model/hotel");
const City = require("../../model/city");




async function getRooms(req, res){
    try{
        const hotelFound = await Hotel.findOne({_id: req.params.hotelId});
        if(!req.query.reservationStatus){
            return  res.status(200).json({success: true, rooms: hotelFound.rooms});
        }

        if(req.query.reservationStatus == "occupied"){
            let occupiedRooms = hotelFound.rooms.filter(function(room){
                if(room.occupied){
                    return true;
                }
            });
            return  res.status(200).json({success: true, rooms: occupiedRooms});
         }

        if(req.query.reservationStatus == "free"){
            let freeRooms = hotelFound.rooms.filter(function(room){
                if(!room.occupied){
                    return true;
                }
            });
            return  res.status(200).json({success: true, rooms: freeRooms});
        }

  }catch(error){
        if(error){
            return res.status(500).json({success: false, reason: error.message});
        }
    }
}


async function reserveRoom(req, res){
    try{
        const hotelFound = await Hotel.findOne({_id: req.params.hotelId});
        
    }
    catch(error){
        if(error){
            res.status(500).json({success: false, reason: error.message})
        }
    }
}




function bookRoom(){

}



module.exports = {getRooms, bookRoom};