const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'guru', 'siswa'], default: 'siswa' },
  barcode: String // Kode unik barcode/QR siswa
});

module.exports = mongoose.model('User', userSchema);