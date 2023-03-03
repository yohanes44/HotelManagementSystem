const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
});



// module.export = mongoose.model('User', UserSchema);
module.export = UserSchema;