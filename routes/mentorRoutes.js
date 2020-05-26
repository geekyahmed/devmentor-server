const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController')
const postController = require('../controllers/postController')
const { isUserAuthenticated } = require('../middlewares/auth')

//Edit Profile Route
router.route('/edit/:id', isUserAuthenticated)
  .put(profileController.editProfile)

  //Delete Profile Route
router.route('/delete/:id', isUserAuthenticated)
  .delete(profileController.deleteProfile)
  
  router.route('/post/create', isUserAuthenticated)
  .post(postController.createPost)

module.exports = router
