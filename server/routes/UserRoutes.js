import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const SignUp = async (req, res) => {
  const { fname, lname ,email, password } = req.body;

  if(!fname || !lname || !email || !password){
    return res.json({success : false, message : "Fulfill the form"})
  }

  try {

    const userExist = await UserModel.findOne({email})

    if(userExist){
      return res.json({success : false, message : "User Already Exist"})
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const User = new UserModel({
      fname,lname,email,password : hashedPassword
    })

    await User.save();

    const token = jwt.sign({id : User._id}, process.env.SECRET_KEY, {expiresIn : '7d'})

    res.cookie('token', token, {
      httpOnly : true,
      secure : process.env.NODE_ENV == 'production',
      sameSite : process.env.NODE_ENV == 'production' ? 'none' : "strict",
      maxAge : 7 * 24 * 60 * 60 * 1000
    })

    return res.json({ success: true, message: "Sign Up Successfully" });
  } catch (error) {
    return res.json({ success: false, error: error });
  }
};

export const GetAllUser = async (req, res) => {

  try {
    const users = await UserModel.find({})
    await users.save()

    return res.json({success : true, message : "Fetch All Users", users : users})
  } catch (error) {
    return res.json({succes : false, message : error})
  }
}