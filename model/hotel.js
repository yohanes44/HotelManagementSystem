const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    role: {
        type: String,
        enum: ["receptionist", "hotelManager", "customer", "admin"]
    },
    hotel:{
        type: mongoose.Types.ObjectId,
        ref: "Hotel"
    }
});


const HotelInfoSchema = new mongoose.Schema({
    pictures: [{ type: String }],
    services: {
        parking: { type: Boolean },
        restaurant: { type: Boolean },
        bar: { type: Boolean },
        steamJacuzzi: { type: Boolean }
    },
    accounts: [AccountSchema]
})

const RoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true },
    roomType:{ type: String, enum:["Single", "Double", "Sweet"], require: true},
    capacity: { type: Number, required: true, default: 1},
    smokingDesigned: { type: Boolean, required: true, default: false},
    price: { type: Number, required: true },
    bookedDates: [{ type: Date }],
    rating: { type: Number },
    customerFeedback:[
        {user: String, message: String}
    ],
    houseKeeping: {
                 cleaningSchedule: [Date],
                 cleaningStatus: { type: String }
    },
    issueList: [
        {
            issue: { type: String },
            issueStatus: { type: String }
        }
    ],
    occupied: { type: Boolean },
    customerInfo: {
        userInfo: {
            name: String ,
            gender:{ type: String, enum: ["female", "male"], default: "none"},
            phoneNumber: Number,
            email: String
        }, 
        specialRequest: false,
    },
    pictures: [{ type: String }],
    description: { type: String },
    roomFeatures: [{ type: String }],
    performance: { type: Number },
    outOfOrder: { type: Boolean }
});


const hotelSchema = new mongoose.Schema({

    hotelName: {
       type: String,
       required: true
   },
   city: {
       type: String,
       required: true
   },
   rating: { type: Number, required: true },
   location: {
       longitude: { type: Number, required: true },
       latitude: { type: Number, required: true }
   },
   review: [String],
   address: { type: String, required: true },
   hotelInfo:  HotelInfoSchema,
   phoneNumber: { type: String},
   email: { type: String},
   rooms: [RoomSchema]
});


module.exports = mongoose.model("Hotel", hotelSchema);