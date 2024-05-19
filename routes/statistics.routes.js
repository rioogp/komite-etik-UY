const express = require('express');
const { getStatistics } = require('../controllers/statistics.controller');

const router = express.Router();

router.get('/', getStatistics);

module.exports = router;
