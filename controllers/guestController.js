const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Mentor = require('../models/mentorModel').Mentor

process.env.SECRET_KEY = 'secret'

module.exports = {
  //Get Registered Users
  index: async (req, res) => {
    const mentors = await Mentor.find()

    res.json(mentors)
  },

  //Register New User
  registerMentor: (req, res) => {
    const today = new Date()
    const userData = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      country: req.body.country,
      bio: req.body.bio,
      tags: req.body.tags,
      facebook: req.body.facebook,
      twitter: req.body.twitter,
      github: req.body.github,
      stackoverflow: req.body.stackoverflow,
      hashnode: req.body.hashnode,
      website: req.body.website,
      created: today
    }

    Mentor.findOne({
      email: req.body.email
    })
      .then(mentor => {
        if (!mentor) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash
            Mentor.create(userData)
              .then(mentor => {
                res.json({ status: mentor.email + ' has been registered' })
              })
              .catch(err => {
                res.send('error: ' + err)
              })
          })
        } else {
          res.json({ error: 'User already exists' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  },

  //Login Controller For Mentors
  postLogin: (req, res) => {
    Mentor.findOne({
      email: req.body.email
    })
      .then(mentor => {
        if (mentor) {
          if (bcrypt.compareSync(req.body.password, mentor.password)) {
            const payload = {
              _id: mentor._id,
              name: mentor.name,
              username: mentor.username,
              email: mentor.email,
              city: mentor.city,
              country: mentor.country,
              bio: mentor.bio,
              tags: mentor.tags,
              facebook: mentor.facebook,
              twitter: mentor.twitter,
              github: mentor.github,
              stackoverflow: mentor.stackoverflow,
              hashnode: mentor.hashnode,
              website: mentor.website,
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 197000
            })
            res.send({ status: 'You have logged in successfully', token: token })
          } else {
            res.json({ error: 'Mentor does not exist' })
          }
        } else {
          res.json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  },

  //Get Mentor Profile
  getSingleMentor: (req, res) => {
    const id = req.params.id;

    Mentor.findById(id)
      .then(mentor => {
        if (!mentor) {
          res.status(404).json({ message: 'No Mentor Found' });
        }
        else {
          res.json(mentor);
        }
      })
  },

}
