const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');

// Get personalized recommendations
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('wishlist');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Simple collaborative filtering
    const userPreferences = user.preferences.categories || [];
    
    const recommendations = await Product.find({
      category: { $in: userPreferences },
      _id: { $nin: user.wishlist }
    })
    .limit(10)
    .sort({ rating: -1 });

    res.json({
      userId: req.params.userId,
      recommendations,
      count: recommendations.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Train recommendation model
router.post('/train', async (req, res) => {
  try {
    res.json({ message: 'Model training started' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
