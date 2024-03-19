const ProductModel = require("../models/product")
const fs = require("fs");


app.get('/products', async (req, res) => {
    const products = await Product.findAll({
      include: [{ model: ProductType, as: 'productType' }]
    });
    res.json(products);
  });
  