const express = require('express')
const router = express.Router()
const mentorController = require('../controllers/mentorController')
const { isUserAuthenticated } = require('../middlewares/auth')

router.route('/edit/:id', isUserAuthenticated)
  .put(mentorController.editProfile)

router.route('/delete/:id', isUserAuthenticated)
	.delete(mentorController.deleteProfile)

module.exports = router
