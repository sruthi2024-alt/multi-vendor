const express = require('express');
const router = express.Router();
const { getProfile, checkUserRole } = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

router.get('/profile', authenticate, getProfile);
router.get('/check-role', authenticate, checkUserRole);

module.exports = router;
