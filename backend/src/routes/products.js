const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products with pagination and filtering
router.get('/', async (req, res) => {
  try {
    const { category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    const skip = (page - 1) * limit;
    const products = await Product.find(filter)
      .populate('seller', 'name email')
      .limit(parseInt(limit))
      .skip(skip);

    const total = await Product.countDocuments(filter);

    res.json({
      products,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('seller', 'name email')
      .populate('reviews.user', 'name');
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create product (seller)
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, images, stock } = req.body;
    
    const product = new Product({
      name,
      description,
      price,
      category,
      images,
      stock,
      seller: req.body.sellerId
    });
    
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
