const Post = require('../models/postModel')

module.exports = {

    getPosts: (req, res) => {
       const posts = Post.find()

       res.json(posts);
    },

    createPost: (req, res)=> {
        const today = Date.now()
        const postData = {
            title: req.body.title,
            summary: req.body.summary,
            description: req.body.description,
            today: today
        }
        Post.findOne({
            title: req.body.title
        })
            .then(post => {
                Post.create(postData)
                    .then(post => {
                        res.json({status: post.title + ' has been created'})
                    })
            })
            .catch(err => {
                res.json('Error: '+ err)
            })
    },

    getSinglePost: (req, res)=> {
        const id = req.params.id

        Post.findById(id)
            .then(post => {
                res.json(post)
            })
    }
}