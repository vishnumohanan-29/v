module.exports = app => {
    const products = require("../controller/products.controller");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", products.create);
  
    // Retrieve all products
    router.get("/", products.findAll);
  
   
    // Update a Tutorial with id
    router.put("/:id", products.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", products.delete);
  
    
  
    app.use('/api/products', router);
  };