const mongoose = require("mongoose");



const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hotels: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        location:{
            logitide: String,
            latitude:String,
        },
        address: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: 'Hotel'
        },
        totalRooms: {
            type: Number,
            required: true
        }
    }]
});


module.exports = mongoose.model("City", citySchema);