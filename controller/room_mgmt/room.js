const mongoose = require("mongoose");


const Hotel = require("../../model/hotel");
const City = require("../../model/city");




async function getReservedRooms(req, res){
    try{
            const hotelFound = await Hotel.findOne({_id: req.params.hotelId});
            let occupiedRooms = hotelFound.rooms.filter(function(room){
                 if(room.occupied){
                     return true;
                 }
            });
            return  res.status(200).json({success: true, rooms: occupiedRooms});

     }catch(error){
        if(error){
            return res.status(500).json({success: false, reason: error.message});
        }
      }
}



async function checkOutRoom(req, res){

    try{
        const hotelFound = await Hotel.findOne({_id: req.query.hotelId});
      
        let foundRoom = hotelFound.rooms.find(function(room){
            if(room.roomNumber == req.query.roomNumber && room.occupied){
                room.occupied = false;
                return true; 
            }
                
        });
        hotelFound.save();
        if(!foundRoom){
            return res.status(500).json({success: false, message: `Room Number ${req.query.roomNumber} is checkedOut already`});
        }
        if(foundRoom){
            return res.status(200).json({success: true, message: `Room Number ${foundRoom.roomNumber} checkedOut Succesfully`});
        }
    }

    catch(error){
        if(error){
            return res.status(500).json({success: true, result: error.message});
        }
    }
}






module.exports = { getReservedRooms, checkOutRoom }