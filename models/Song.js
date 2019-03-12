const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SongSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Song = mongoose.model('song',SongSchema);