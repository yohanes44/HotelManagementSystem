const mongoose = require("mongoose");


const Hotel = require("../../model/hotel");
const City = require("../../model/city");





async function getHotel(req, res){
    let hotels = null;
    
    if(req.query.hotelId){
        hotels = await Hotel.find({_id: req.query.hotelId})
    }
    else if(!req.query.hotelId){
         hotels = await Hotel.find()
    }
   
    try{
        res.json(hotels);
    }
    catch(error){
        if(error){
            res.json(error)
        }
    }
}



module.exports = {getHotel};
