const express = require('express')
const router = express.Router()
const mentorController = require('../controllers/mentorController')
const { isUserAuthenticated } = require('../middlewares/auth')

router.route('/edit/:id', isUserAuthenticated)
  .put(mentorController.editProfile)

module.exports = router
