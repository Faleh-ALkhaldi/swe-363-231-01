const express = require('express');
const app = express();
const port = 3000;

const homeRouter = require('./homeRouter');
const contactFormRouter = require('./contactFormRouter');
const confirmationRouter = require('./confirmationRouter');
const detailsFormRouter = require('./detailsFormRouter');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public/'));

app.use('/', homeRouter);
app.use('/contact', contactFormRouter);
app.use('/confirmation', confirmationRouter);
app.use('/details', detailsFormRouter);

app.all('*', (req,res) =>{
    res.status(404).send("<h1>404 <br> <br>Error, page not found!</h1>")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
