const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const listitem = require('./routes/listitem.route');
const app = express();

const mongoose = require('mongoose');
let db_url = 'mongodb://localhost:27017/todolist';
let mongodb = process.env.MONGODB_URI || db_url;
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

// Connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function() {
    console.log('Connected to database');
});
db.on('disconnected', function() {
    console.log('Disconnected from database');   
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // check what urlencoded does
app.use(cors());
app.use('/todolist', listitem); 

let port = 1234;

app.listen(port, () => {
    console.log('Server running on port ' + port);
})

