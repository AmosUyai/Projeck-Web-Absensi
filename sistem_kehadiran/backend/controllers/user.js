const { generateQRCode } = require('../utils/qrGenerator');
const User = require('../model/User');

exports.generateSiswaQR = async (req, res) => {
  const siswa = await User.findById(req.params.id);
  if (!siswa || siswa.role !== "siswa") return res.status(404).json({ message: "Siswa tidak ditemukan" });

  const qr = await generateQRCode(siswa.barcode || siswa._id.toString());
  res.json({ qr }); // base64 image
};