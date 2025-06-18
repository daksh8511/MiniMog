import transporter from "../config/nodemailer.js";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const SignUp = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  if (!fname || !lname || !email || !password) {
    return res.json({ success: false, message: "Fulfill the form" });
  }

  try {
    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.json({ success: false, message: "User Already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const OTP = Math.floor(Math.random() * 900000);

    const User = new UserModel({
      fname,
      lname,
      email,
      password: hashedPassword,
      otp: OTP,
    });

    await User.save();

    const emailOption = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP Is : ${OTP}`,
    };

    await transporter.sendMail(emailOption);

    return res.json({ success: true, message: "Sign Up Successfully" });
  } catch (error) {
    return res.json({ success: false, error: error });
  }
};

export const GetAllUser = async (req, res) => {
  try {
    const Users = await UserModel.find();
    return res.json({ success: true, users: Users });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const GetPerson = async (req, res) => {
  const { getEmail } = req.query;

  try {
    const User = await UserModel.find({ email: getEmail });

    return res.json({ success: true, data: User });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const SignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Enter Email or password" });
  }

  try {
    const User = await UserModel.findOne({ email });

    if (!User) {
      return res.json({ success: false, message: "User Not Registered" });
    }

    const isMatched = await bcrypt.compare(password, User.password);

    if (!isMatched) {
      return res.json({ success: false, message: "password not matched" });
    }

    const token = jwt.sign({ id: User._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "prodcution",
      sameSite: process.env.NODE_ENV === "prodcution" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    await User.updateOne({ isSignIn: true });

    return res.json({ success: true, message: "Login Successfully" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const DeleteAccount = async (req, res) => {
  const {email} = req.body

  try {
    const User = await UserModel.findOneAndDelete({email})

    await User.save()

    return res.json({success : true, message : "Account Delete Successfully"})
  } catch (error) {
    return res.json({success : false, message : error})
  }
}