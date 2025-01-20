const express = require('express');
const router = express.Router();
const fetchDataController = require('../controllers/fetchDataController');

// Define the GET route to render the index view
router.get('/', fetchDataController.fetchData);

module.exports = router;