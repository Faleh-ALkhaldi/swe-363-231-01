const express = require('express');
const app = express();
const port = 3000;

const homeRouter = require('./homeRouter');
const contactRouter = require('./contactRouter');
const confirmationRouter = require('./confirmationRouter');
const detailsRouter = require('./detailsRouter');

app.use(express.static('public/'));

app.use('/', homeRouter);
app.use('/contact', contactRouter);
app.use('/confirmation', confirmationRouter);
app.use('/details', detailsRouter);

app.all('*', (req,res) =>{
    res.status(404).send("<h1>404 <br> <br>Error, page not found!</h1>")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});