import UserModel from "../models/UserModel.js";

export const AddToCart = async (req, res) => {
  const { email, productsId } = req.body;

  console.log(productsId)

  try {
    const User = await UserModel.findOneAndUpdate(
      { email: email },
      { $push: { cart: productsId } }
    );

    await User.save()

    return res.json({success : true, message : "Successfully added in the cart"})
  } catch (error) {
    return res.json({ success: false, message: "failed to add in cart!" });
  }
};

export const RemoveFromCart = async (req, res) =>{
  const {email, product} = req.body

  try {
    const User = await UserModel.findOneAndUpdate({'email' : email},{$pull : {'cart' : product}})

    await User.save()

    return res.json({success : true, message : 'successfully removed'})

  } catch (error) {
    return res.json({success : false, message : error})
  }
}