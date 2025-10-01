const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const classController = require('../controllers/Class');

// CRUD kelas
router.post('/', auth, classController.createClass);
router.get('/', auth, classController.getAllClasses);
router.get('/:id', auth, classController.getClassById);
router.put('/:id', auth, classController.updateClass);
router.delete('/:id', auth, classController.deleteClass);

module.exports = router;