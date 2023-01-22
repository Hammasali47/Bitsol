const express =  require("express")
const { getAllProducts,AddProduct,getProductById } = require("../controllers/productControllers")
const routes = express.Router()

routes.get("/getallproducts",getAllProducts)

routes.get("/products/:id",getProductById)

routes.post("/add",AddProduct)

routes.delete("/delete",(req,res)=>{
    res.send(req.body)
})
routes.put("/update",(req,res)=>{
    res.send(req.body)
})

module.exports =routes;