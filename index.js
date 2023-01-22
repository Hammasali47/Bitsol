const express = require("express");
const cors = require("cors");
const app = express();
const db =require("./models/db")
const ProductRoutes = require("./routes/productroutes")
const UserRoutes = require("./routes/userRoutes")
require("dotenv").config()

var corsOptions = {
    origin:"http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.use("/product",ProductRoutes)
app.use("/user",UserRoutes)

const port = 4000 ;

app.listen(port,async()=>{
    console.log(`Server is running on ${port}`)
})