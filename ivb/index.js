const express = require("express");
const app = express();
const port = 8000;
var cors = require('cors')

app.use(cors())
app.use(express.json());

let dbVals = ["books", "mobile", "airpods", "laptops"];

let addNewItem = (data) => {
  dbVals.push(data);
};

app.get("/", (req, res) => {
  res.send("...");
});

// Get All Products
app.get("/getlist", (req, res) => {
  res.json(dbVals);
});

// Add new product
app.post("/updateList", (req, res) => {
  let newProduct = req.body.newProduct;
  if (newProduct) {
    addNewItem(newProduct);
    res.json({sucess: true, newData: dbVals})
  }else{
    res.json({sucess: false})
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
