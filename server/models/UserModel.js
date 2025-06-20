import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },
    password: { type: String, required: true, minlength: 8 },
    isVerified: { type: Boolean, default: false },
    cart: { type: [String] },
    otp: { type: Number },
    isSignIn: { type: Boolean, default: false },
    addresses: { type: [String] },
    isSellere: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
