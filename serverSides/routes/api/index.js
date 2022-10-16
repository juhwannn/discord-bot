console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

router.use('/test', require('./test'));
router.use('/discord', require('./discord'));
router.use('/pubg', require('./pubg'));

module.exports = router;
