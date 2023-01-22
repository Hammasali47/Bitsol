
const Product = require("../models/productmodel")
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;

const getAllProducts = async (req, res) => {

    try {

        console.log("inside get all products aoi");
        const products = await Product.find({});
        res.status(200).send({
            status: true,
            products,
            message: "All products fetched successfully"
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).send({
            status: false,
            message: "Something went wrong"
        })
    }
}

const getProductById = async(req,res)=>{
    try {
        // const id =ObjectId.fromString( req.params.id );
        const Id = req.params.id
        console.log("id",Id)
        const id = Id.toString();
        const products = await Product.findById(Id)
        res.status(200).send({
            status: true,
            products,
            message: "Product fetched successfully"
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).send({
            status: false,
            message: "Something went wrong"
        })
    }
}

const AddProduct = async(req,res)=>{
    try {

        const {name,price,pieces} = req.body;

        const products = new Product({
            name:name,
            price:price,
            pieces:pieces
        })
        products.save()
        res.status(200).send({
            status: true,
            message: "Product created successfully"
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).send({
            status: false,
            message: "Something went wrong"
        })
    }
}



module.exports = {
    getAllProducts,
    getProductById,
    AddProduct
}