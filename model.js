const mongoose = require("mongoose");


const CitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }]
});



const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    location: {
        longitude: { type: Number, required: true },
        latitude: { type: Number, required: true }
    },
    address: { type: String, required: true },
    hotelInfo: {
        pictures: [{ type: String }],
        services: {
            parking: { type: Boolean },
            restaurant: { type: Boolean },
            bar: { type: Boolean },
            steamJacuzzi: { type: Boolean }
        }
    },
    phoneNumber: { type: String},
    email: { type: String},
    website: { type: String},
    rooms: [RoomSchema]
});


const RoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true },
    roomType:{ type: String, enum:["Single", "Double", "Sweet"], require: true},
    price: { type: Number, required: true },
    bookedDates: [{ type: Date }],
    rating: { type: Number },
    customerFeedback: { type: String },
    houseKeeping: [
        {
            cleaningSchedule: { type: Date },
            cleaningStatus: { type: String }
        }
    ],
    issueList: [
        {
            issue: { type: String },
            issueStatus: { type: String }
        }
    ],
    occupied: { type: Boolean },
    customerInfo: {
        name: { type: String },
        email: { type: String }
    },
    pictures: [{ type: String }],
    description: { type: String },
    roomFeatures: [{ type: String }],
    performance: { type: Number },
    outOfOrder: { type: Boolean }
});


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
});



module.exports = { City, Hotel, User };