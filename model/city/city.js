const mongoose = require("mongoose");


const CitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }]
});


// module.export = mongoose.model('City', CitySchema);
module.export = CitySchema;