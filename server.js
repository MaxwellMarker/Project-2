//Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;

//Mongo connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

//Controllers
app.get('/', (req, res) => {
    res.render('Home');
})

const logsController = require('./controllers/logs.js');
app.use('/logs', logsController);

const recordsController = require('./controllers/records.js');
app.use('/prs', recordsController);

//Listen
app.listen(PORT, () => {
    console.log('listening on ' + PORT);
})