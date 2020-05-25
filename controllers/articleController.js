const Article = require('../models/articleModel')

module.exports = {
    

    createArticle: (req, res)=> {
        const today = Date.now()
        const articleData = {
            title: req.body.name,
            summary: req.body.summary,
            description: req.body.description,
            today: req.body.today
        }
        Article.findOne({
            title: req.body.title
        })
            .then(article => {
                Article.create(articleData)
                    .then(article => {
                        res.json({status: article.title + 'has been created'})
                    })
            })
            .catch(err => {
                res.json('Error: '+ err)
            })
    }
}