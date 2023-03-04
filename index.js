require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { url } = require('inspector');
const app = express()
const port = process.env.PORT;


require("./database");






const Hotel = require("./model/hotel");
const City =require("./model/city");








const newHotel = new Hotel({
    hotelName: 'swe',
    city: 'Addis Ababa',
    rating: 4.9,
    location: {
        longitude: 12,
        latitude: 15
    },
    address: "Bole",
    hotelInfo:{
        pictures:["wwww.lg.com", "hkhgjg.sdsf"],
        services: {
            parking: true,
            restaurant: false,
            bar: true,
            steamJacuzzi: true
        },
        accounts: [
            { 
               firstName: "Jo",
               lastName: "Debebe",
               username: "yphanesD",
               password: "john",
               role: "hotelManager"

            },
            { 
                firstName: "DY",
                lastName: "Yifru",
                username: "DaveY",
                password: "dave",
                role: "admin"
            }
        ]
    },
    review:["Good Customer Service", "Nice Hotel", "The Best"],
    
    phoneNumber: 0920464248,
    email: "getVaHotel@gmail.com",
    rooms: [
                {
                    roomNumber: 102,
                    roomType:  "Single",
                    capacity: 2,
                    smokingDesigned: false,
                    price: 150,
                    bookedDates: [new Date("2022-05-01"), new Date("2022-05-02")],
                    rating: 4.5,
                    customerFeedback: [
                        {
                            user: "Dave",
                            message: "Great room, comfortable bed"  
                        },
                        {
                            user: "John",
                            message: "Every thing is good"   
                        },
                        {
                            user: "Alex",
                            message: "refregrator not work"   
                        }
                    ],
                    houseKeeping:
                        {
                            cleaningSchedule: [new Date("2022-05-03"), new Date("2022-07-07")],
                            cleaningStatus: "dirty"
                        },
                    issueList: [
                        {
                            issue: "broken lamp",
                            issueStatus: "reported"
                        }
                    ],
                    occupied: true,
                    customerInfo: {
                        userInfo: {
                            name: "debe yilma",
                            gender: "male",
                            email: "debe_yilma@example.com",
                            phoneNumber: "0920464248"
                        },
                        specialRequest: false,     
                    },
                    pictures: ["https://example.com/room101.jpg"],
                    description: "Spacious room with a king-size bed and a balcony",
                    roomFeatures: ["personal shower", "air conditioning"],
                    performance: 90,
                    outOfOrder: false
                },
                {
                    roomNumber: 103,
                    roomType:  "Sweet",
                    capacity: 1,
                    smokingDesigned: true,
                    price: 250,
                    bookedDates: [new Date("2022-05-01"), new Date("2022-05-02")],
                    rating: 3.5,
                    customerFeedback: [ 
                        {user: "Dave", message: "Great room, comfortable bed"},
                        {user: "John", message: "Every thing is good"},
                        {user: "Abreham", message: "Nice"}
                   ],
                    houseKeeping:
                        {
                            cleaningSchedule: new Date("2022-05-03"),
                            cleaningStatus: "clean"
                        },
                    issueList: [
                        {
                            issue: "broken lamp",
                            issueStatus: "reported"
                        },
                        {
                            issue: "Electricity Off",
                            issueStatus: "reported"
                        },
                        {
                            issue: "broken Door",
                            issueStatus: "resolved"
                        }
                    ],
                    occupied: true,
                    customerInfo: {
                        userInfo: {
                            name: "debe yilma",
                            gender: "male",
                            email: "debe_yilma@example.com",
                            phoneNumber: "0920464248"
                        },
                        specialRequest: false,
        
                       
                    },
                    pictures: ["https://example.com/room101.jpg"],
                    description: "Spacious room with a king-size bed and a balcony",
                    roomFeatures: ["personal shower", "air conditioning"],
                    performance: 90,
                    outOfOrder: false
                }
        
            ]
});





newHotel.save().then(hotel => {
         console.log("hotel");
        City.findOneAndUpdate(
            { name: hotel.city },
            { $addToSet: { hotels: { name: hotel.hotelName, 
                                     rating: hotel.rating, 
                                     location: { longitude: 342423, latitude: 86976876},
                                     address: hotel.address, 
                                     id: hotel._id, 
                                     totalRooms: hotel.rooms.length
                                    } 
                         } 
            },
            { upsert: true }
        )


    })
    .catch(err => console.log(err));


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})