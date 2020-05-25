const express = require('express')
const router = express.Router()
const mentorController = require('../controllers/mentorController')
const { isUserAuthenticated } = require('../middlewares/auth')

//Edit Profile Route
router.route('/edit/:id', isUserAuthenticated)
  .put(mentorController.editProfile)

  //Delete Profile Route
router.route('/delete/:id', isUserAuthenticated)
	.delete(mentorController.deleteProfile)

module.exports = router
