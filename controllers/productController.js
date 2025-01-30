// controllers/productController.js
const Product = require('../models/Product');

// Create Product
const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  try {
    const newProduct = new Product({ name, description, price, stock, vendor: req.user.userId });
    await newProduct.save();

    res.json({ msg: 'Product created', product: newProduct });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('vendor', 'name email');
    res.json({ products });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { createProduct, getProducts };
