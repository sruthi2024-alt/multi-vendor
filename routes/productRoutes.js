
const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, createProduct);


router.get('/', getProducts);

module.exports = router;
