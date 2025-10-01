const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  waliKelas: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // role: guru
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // role: siswa
});

module.exports = mongoose.model('Class', classSchema);