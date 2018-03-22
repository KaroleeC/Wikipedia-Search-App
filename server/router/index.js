const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController')

console.log('router index');
router.route('/search')
.get(searchController.getPage)

module.exports = router;