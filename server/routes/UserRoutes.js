import transporter from "../config/nodemailer.js";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";

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
    const users = await UserModel.find({});
    await users.save();

    return res.json({
      success: true,
      message: "Fetch All Users",
      users: users,
    });
  } catch (error) {
    return res.json({ succes: false, message: error });
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
