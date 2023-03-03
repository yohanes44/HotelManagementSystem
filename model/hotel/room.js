const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true },
    roomType:{ type: String, enum:["Single", "Double", "Sweet"], require: true},
    price: { type: Number, required: true },
    bookedDates: [{ type: Date }],
    rating: { type: Number },
    customerFeedback: [
        {
            user: String,
            message: String
        }
    ],
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


// module.export = { RoomSchema: RoomSchema,
//                   RoomModel:  mongoose.model('Room', RoomSchema)
//                  }
                
module.export = {RoomSchema: RoomSchema,
                 RoomModel: mongoose.model('Room', RoomSchema)
                };