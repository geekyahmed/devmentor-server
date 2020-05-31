const express = require('express')
const router = express.Router()
const cors = require('cors');
const guestController = require('../controllers/guestController')
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

    
module.exports = router
