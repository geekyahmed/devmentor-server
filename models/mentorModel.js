const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    bio: {
        type: String
    },
    tags: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now()
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    github: {
        type: String
    },
    stackoveflow: {
        type: String
    },
    hashnode: {
        type: String
    },
    website: {
        type: String
    },
});
module.exports = { Mentor: mongoose.model('mentors', mentorSchema) }