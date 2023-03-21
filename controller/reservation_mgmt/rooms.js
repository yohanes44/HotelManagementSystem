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
        // const roomNum = 

    }
    catch(error){
        if(error){
            res.status(500).json({success: false, reason: error.message})
        }
    }
}




async function bookRoom(req, res){
    console.log("bookRoom function");

    try{
        const hotelFound = await Hotel.findOne({_id: req.query.hotelId});
        hotelFound.rooms.map(function(room){
            if(room.roomNumber === req.query.roomNumber){
                room.occupied = true;
                // return true;
            }
        });
        hotelFound.save();
        return res.status(200).json({success: true, message: "Room Booked Succesfully"});
    }

    catch(error){
        if(error){
            return res.status(500).json({success: true, result: error.message});
        }
    }

    // return res.status(200).json({success: true, message: "BookRoom Function"})
}



module.exports = {getRooms, bookRoom};