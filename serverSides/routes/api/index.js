console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

router.use('/test', require('./test'));
router.use('/discord', require('./discord'));

module.exports = router;
