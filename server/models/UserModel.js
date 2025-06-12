import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fname : {type : String, required : true},
    lname : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    rePassword : {type : String, required : true},
    isVerfied : {type : Boolean, default : false},
})

const UserModel = new mongoose.model('users', UserSchema)

export default UserModel