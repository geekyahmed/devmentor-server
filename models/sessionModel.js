const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cover_image: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mentor : {
        type: Schema.Types.ObjectId,
        ref: 'mentor'
    }
})

module.exports = {
    Post: mongoose.model('posts', postSchema)
}