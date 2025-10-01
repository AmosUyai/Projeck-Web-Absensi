const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  status: { type: String, enum: ['hadir', 'tidak hadir'], default: 'tidak hadir' },
  markedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Guru/Admin
  scanSource: { type: String, enum: ['barcode', 'manual'], default: 'barcode' }
});

module.exports = mongoose.model('Attendance', attendanceSchema);