const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { scanAttendance, getReport } = require('../controllers/kehadiran');

router.post('/scan', auth, scanAttendance); // Scan barcode
router.get('/report', auth, getReport);     // Laporan absensi

module.exports = router;