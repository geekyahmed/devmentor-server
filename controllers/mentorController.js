const Mentor = require('../models/mentorModel').Mentor
const Article = require('../models/articleModel').Article

    createArticle: (req, res) => {
        const today = Date.now()

        const articleData = {
            title  = req.body.title,
            cover_image = req.body.cover_image,
            summary = req.body.summary,
            desc
        }
    }

}