const QRCode = require('qrcode');

exports.generateQRCode = async (text) => {
  try {
    return await QRCode.toDataURL(text); // hasil base64, bisa disimpan di DB atau dikirim ke frontend
  } catch (err) {
    throw err;
  }
};