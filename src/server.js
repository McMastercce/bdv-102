const express = require("express");
const bodyParser = require("body-parser");

const app = new express();
// declare express middlewear
app.use(bodyParser.json())

// customer routes
app.use(require("./routes/customer_route"))

// product routes
app.use(require("./routes/product_route"))

// cart routes
// TODO


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Servere is running... at port " + PORT)
})