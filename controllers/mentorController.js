const Mentor = require('../models/mentorModel').Mentor

module.exports = {

    //Edit Profile
    editProfile: (req, res) => {
        const id = req.params.id;
        Mentor.findById(id)
            .then(mentor => {
                mentor.name = req.body.name,
                    mentor.username = req.body.username,
                    mentor.email = req.body.email,
                    mentor.password = req.body.password,
                    mentor.city = req.body.city,
                    mentor.country = req.body.country,
                    mentor.bio = req.body.bio,
                    mentor.tags = req.body.tags,
                    mentor.facebook = req.body.facebook,
                    mentor.twitter = req.body.twitter,
                    mentor.github = req.body.github,
                    mentor.stackoverflow = req.body.stackoverflow,
                    mentor.hashnode = req.body.hashnode,
                    mentor.website = req.body.website

                mentor.save()
                    .then(updateProfile => {
                        res.json({ status: 'Profile Update Successfully' })
                    })
                    .catch(err => {
                        res.json({ status: "Error at" + err })
                    })

            });

    },
    deleteProfile: (req, res) => {
        const id = req.params.id

        Mentor.findByIdAndDelete(id)
            .then(deletedProfile => {
                res.json({ status: 'Your Profile has been deleted' })
            })
            .catch(err => {
                res.json({ error: err })
            })
    }

}