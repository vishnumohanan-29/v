module.exports = mongoose => {
    const Product = mongoose.model(
      "products",
      mongoose.Schema(
        {
          name: String,
          description: String,
          price:Number,
          quantity:Number
        },
        { timestamps: true }
      )
    );
  
    return Product;
  };