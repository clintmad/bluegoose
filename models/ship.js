var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    name: {type: String },
    nickname: {type: String },
    crew: {type: Number },
})

module.exports = mongoose.model('Ship', schema);