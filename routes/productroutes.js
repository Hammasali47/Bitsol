const express =  require("express")
const { getAllProducts,AddProduct,getProductById } = require("../controllers/productControllers")
const {authMiddleware} = require("../Middleware/authmiddleware")
const routes = express.Router()

routes.get("/getallproducts",getAllProducts)

routes.get("/products/:id",authMiddleware,getProductById)

routes.post("/add",authMiddleware,AddProduct)

routes.delete("/delete",(req,res)=>{
    res.send(req.body)
})
routes.put("/update",(req,res)=>{
    res.send(req.body)
})

module.exports =routes;