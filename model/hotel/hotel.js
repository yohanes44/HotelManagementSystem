const mongoose = require("mongoose");
const { RoomSchema, RoomModel} = require("../hotel/room.js");


const HotelInfoSchema = new mongoose.Schema({
    pictures: [{ type: String }],
    services: {
        parking: { type: Boolean },
        restaurant: { type: Boolean },
        bar: { type: Boolean },
        steamJacuzzi: { type: Boolean }
    }
})


const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    location: {
        longitude: { type: Number, required: true },
        latitude: { type: Number, required: true }
    },
    review: [String],
    address: { type: String, required: true },
    hotelInfo: HotelInfoSchema,
    phoneNumber: { type: String},
    email: { type: String},
    website: { type: String}
    // rooms: [RoomSchema]
});


// module.export = mongoose.model('Hotel', HotelSchema);
module.export = HotelSchema;