import UserModel from "../models/UserModel.js";

export const SignUp = async (req, res) => {
  const { fname, lname ,email, password, rePassword } = req.body;

  try {
    const User = new UserModel({
      fname,
      lname,
      email,
      password,
      rePassword,
    });

    if (password !== rePassword) {
      return res.json({ success: false, message: "password are not match!" });
    }

    await User.save();

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