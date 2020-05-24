const express = require('express')
const router = express.Router()
const cors = require('cors');
const guestController = require('../controllers/guestController')
router.use(cors())

process.env.SECRET_KEY = 'secret'

//Get Registered Users
router.route('/', async (req, res) => { })
  .get(guestController.index)


//Register New User
// noinspection JSCheckFunctionSignatures
router.route('/login')
  .post(guestController.postLogin);


// noinspection JSCheckFunctionSignatures
router.route('/register')
  .post(guestController.registerMentor);

router.route('/:id')
  .get(guestController.getSingleMentor)
//Login Route Four Users 

module.exports = router
