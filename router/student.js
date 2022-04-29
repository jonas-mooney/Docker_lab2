const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Student pages');
})

module.exports = router;