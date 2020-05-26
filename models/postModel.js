const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    },

});
module.exports = {
    Post: mongoose.model('posts', postSchema)
}