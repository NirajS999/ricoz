const express = require('express')
const router = express.Router()
const { createUser, getUsers, updateUser, deleteUser, getSingleUser } = require('../controllers/userController')

router.get('/',getUsers)

router.post('/', createUser)

router.get('/:id',getSingleUser)

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)


module.exports = router