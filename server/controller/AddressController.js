import UserModel from "../models/UserModel.js";

export const AddAddress = async (req, res) => {
  const { email, address } = req.body;

  try {
    const User = await UserModel.findOneAndUpdate({ 'email' : email }, {$push : {'addresses' : address}});

    await User.save();

    return res.json({ success: true, message: "Address Added Successfully" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const GetAddress = async (req, res) => {
  const {email} = req.query


  try {
    const User = await UserModel.find({email})

    return res.json({success : true, user : User})

  } catch (error) {
    return res.json({success : false, message : error})
  }

}

export const RemoveAddress = async (req, res) => {
  const {email} = req.query;

  try {
    const User = await UserModel.findOneAndUpdate({'email' : email},{$unset : {'addresses' : 1}})

    await User.save()

    return res.json({success : true, message : 'Address Are Deleted Successfully'})

  } catch (error) {
    return res.json({success : false, message : error})
  }
}