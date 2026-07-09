import productModel from "../models/productModel.js";

export async function addProduct (req, res){
    let image_filename = `${req.file.filename}`
    const product = new productModel({
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        image:image_filename,
        yearlyPlan:req.body.yearlyPlan,
        facilities:req.body.facilities,
    })

    await product.save()
    res.json({success:true, message: "Membership Added Successfully"})
}

export async function listProducts(req, res){
    const products = await productModel.find()
    res.json({success:true, data:products})
}