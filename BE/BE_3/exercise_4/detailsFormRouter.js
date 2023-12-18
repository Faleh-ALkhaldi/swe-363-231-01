const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/details.html');
});

// Middleware to process Details form submission
router.post('/submit', (req, res) => {
    const message= req.body;
    console.log('Details Form Data:', message);

    res.redirect('/confirmation');
});

module.exports = router;
