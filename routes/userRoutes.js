const express = require('express')
const router = express.Router()
const { createUser, getUsers, updateUser, deleteUser, getSingleUser } = require('../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)


module.exports = router