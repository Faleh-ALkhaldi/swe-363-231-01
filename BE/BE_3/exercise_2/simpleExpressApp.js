const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Homepage!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us page</h1>');
});

app.all('*', (req,res) =>{
    res.status(404).send("<h1>404 <br> <br>Error, page not found!</h1>")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
