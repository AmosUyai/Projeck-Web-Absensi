require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const classRoutes = require('./rute/Class'); // Ganti ke './routes/class' jika folder sudah diganti
app.use('/api/classes', classRoutes);

// -- Tambahkan route lain di sini (misal: user, auth, dsb) --

// Koneksi ke MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/nama_database_kamu'; // ganti sesuai nama database
mongoose.connect(mongoURI, {
  // Tidak perlu useNewUrlParser dan useUnifiedTopology di mongoose v6+
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});