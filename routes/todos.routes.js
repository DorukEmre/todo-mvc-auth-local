const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos.controller') 
const { ensureAuth } = require('../middleware/auth')

// ensureAuth checks to make sure user is logged in
router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router