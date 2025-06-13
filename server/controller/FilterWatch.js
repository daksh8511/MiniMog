import ProductModel from "../models/ProductModel.js"

export const FilteredWatch = async (req, res) => {
    const {watchfilter} = req.query

    try {
        const Watches = await ProductModel.find({typeOfGood : watchfilter})

        return res.json({success : true , watches : Watches})

    } catch (error) {
        return res.json({success : false, message: error})
    }
}