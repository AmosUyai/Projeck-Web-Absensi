const Class = require('../model/Class');

// Create
exports.createClass = async (req, res) => {
  try {
    const kelas = new Class(req.body);
    await kelas.save();
    res.status(201).json(kelas);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Read All
exports.getAllClasses = async (req, res) => {
  const kelas = await Class.find().populate('waliKelas students', 'name email');
  res.json(kelas);
};
// Read One
exports.getClassById = async (req, res) => {
  const kelas = await Class.findById(req.params.id).populate('waliKelas students', 'name email');
  if (!kelas) return res.status(404).json({ message: "Kelas tidak ditemukan" });
  res.json(kelas);
};
// Update
exports.updateClass = async (req, res) => {
  const kelas = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!kelas) return res.status(404).json({ message: "Kelas tidak ditemukan" });
  res.json(kelas);
};
// Delete
exports.deleteClass = async (req, res) => {
  const kelas = await Class.findByIdAndDelete(req.params.id);
  if (!kelas) return res.status(404).json({ message: "Kelas tidak ditemukan" });
  res.json({ message: 'Kelas dihapus' });
};