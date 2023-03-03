const mongoose = require("mongoose");
const { stringify } = require('querystring');

const mongooseUrl = process.env.MongooseUrl;



mongoose.set("strictQuery", false);
mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", ()=>{
    console.log("DB Connected succesfully");
})
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on("disconnected", ()=>{
    console.log("DB disonnected");
})