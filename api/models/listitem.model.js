const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let listItem = new Schema({
    message: {type: String, required: true}
});

module.exports = mongoose.model('ListItem', listItem);