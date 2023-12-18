const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/details', (req, res) => {
    res.sendFile(__dirname + '/details.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/confirmation', (req, res) => {
    res.sendFile(__dirname + '/confirmation.html');
});

app.all('*', (req,res) =>{
    res.status(404).send("<h1>404 <br> <br>Error, page not found!</h1>")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
