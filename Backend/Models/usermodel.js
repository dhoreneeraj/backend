
const mongoose = require ("mongoose");


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require: [true, "Name is required"],
        trim:true,
        maxlength:[25, "Name must 25 character long"]


    },
    email: {
        type:String,
        require: [true, "Email is Required"],
        unique:true

    }
})

module.exports = mongoose.model("User",UserSchema);