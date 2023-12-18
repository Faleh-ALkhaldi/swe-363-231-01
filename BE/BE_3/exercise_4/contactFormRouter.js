const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Middleware to process Contact form submission
router.post('/submit', (req, res) => {
    const { companyName, email, phoneNumber, service, salary, message } = req.body;
    console.log('Contact Form Data:');
    console.log('Company Name:', companyName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Service:', service);
    console.log('Salary:', salary);
    console.log('Message:', message);

    res.redirect('/confirmation');
});

module.exports = router;
