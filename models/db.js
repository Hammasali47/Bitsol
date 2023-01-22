const mongoose = require("mongoose")

const connection = mongoose
.connect("mongodb+srv://hammasali47:03215181367@cluster0.c30fs.mongodb.net/SaleProduct",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Successfully connected to mongo database")
})
.catch(err=>{
    console.error("Connection err",err)
})

module.exports= connection;

