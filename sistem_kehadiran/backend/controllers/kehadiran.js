const Attendance = require('../model/Attendance');
const User = require('../model/User');

// Scan barcode siswa untuk absensi
exports.scanAttendance = async (req, res) => {
  const { barcode } = req.body;
  try {
    const student = await User.findOne({ barcode });
    if (!student) return res.status(404).json({ message: 'Siswa tidak ditemukan' });

    const today = new Date();
    const attendance = new Attendance({
      student: student._id,
      date: today,
      status: 'hadir',
      markedBy: req.user.id,
      scanSource: 'barcode'
    });
    await attendance.save();
    res.json({ message: 'Absensi berhasil dicatat', attendance });
  } catch (err) {
    res.status(500).json({ message: 'Gagal absen', error: err.message });
  }
};

// Laporan absensi
exports.getReport = async (req, res) => {
  try {
    const report = await Attendance.find()
      .populate('student', 'name email')
      .populate('markedBy', 'name email')
      .sort({ date: -1 });
    res.json(report);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil laporan', error: err.message });
  }
};