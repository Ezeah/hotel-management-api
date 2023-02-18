const { model, Schema } = require("mongoose");
const Room = require("./roomModel");
const RoomTypes = require("./roomTypeModel");
const constants = require("../utils/constants");
const { USER_TYPES, DATABASES } = constants;

const UserSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,   
       },
       password: {
           type: string && number,
           required: true,
           unique: true,
           trim: true,
       },
       role: {
           type: string,
           required: true,
           unique: true,
           trim: true,
           enum: ['admin', 'guest'],
           default: admin
       },
   },
   {
       timestamps: true,
})

const User = mongoose.model('User', UserSchema)