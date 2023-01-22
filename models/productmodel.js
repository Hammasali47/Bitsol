const mongoose  = require("mongoose")
const autoIncrement = require('mongoose-auto-increment');

const ProductSchema = new mongoose.Schema({
    owner:{
        type :mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String,
        default: '',
        required: true
    },
    price:{
        type:Number,
        default: 0,
        required: true
    },
    pieces:{
        type:Number,
        default: 0,
        required: true
    }
})

autoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', field: '_id',startAt: 1 });

const Product = mongoose.model("Product" , ProductSchema)

module.exports = Product;