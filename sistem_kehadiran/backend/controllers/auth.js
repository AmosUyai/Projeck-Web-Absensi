const { validationResult } = require('express-validator')
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  // Cek validasi express-validator
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  // Lanjut proses register
  const { name, email, password, role } = req.body
  try {
    const hashed = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashed, role })
    await user.save()
    res.status(201).json({ message: 'Pendaftaran berhasil', user })
  } catch (err) {
    res.status(400).json({ message: 'Pendaftaran gagal', error: err.message })
  }
}