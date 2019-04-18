const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const port = 3000;

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(morgan('short'));

require('./db/db');
const authorController = require('./controllers/authorController');
app.use('/authors', authorController);

const articleController = require('./controllers/articleController');
app.use('/articles', articleController);




app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});