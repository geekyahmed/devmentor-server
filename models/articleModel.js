const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cover_image: {
        type: String,
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
    Article: mongoose.model('articles', articleSchema)
}