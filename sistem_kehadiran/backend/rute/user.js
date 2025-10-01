const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // jika ada middleware
const userController = require('../controllers/user'); // pastikan path benar

// ... endpoint2 router di bawah ini

router.get('/siswa/:id/qr', auth, userController.generateSiswaQR);

// ... endpoint lain

module.exports = router;