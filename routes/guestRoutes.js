const express = require('express')
const router = express.Router()
const cors = require('cors');
const guestController = require('../controllers/guestController')
const postController = require('../controllers/postController')
router.use(cors())

process.env.SECRET_KEY = 'secret'

//Get Registered Users
router.route('/', async (req, res) => { })
  .get(guestController.index)


//Login Route  For User
router.route('/login')
  .post(guestController.postLogin);


router.route('/register')
  .post(guestController.registerMentor);

router.route('/:id')
  .get(guestController.getSingleMentor);

  router.route('/posts')
    .get(postController.getPosts)

    router.route('/posts/:id')
      .get(postController.getSinglePost)
    
module.exports = router
