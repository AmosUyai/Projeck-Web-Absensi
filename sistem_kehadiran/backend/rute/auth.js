const { body } = require('express-validator');

router.post('/register',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('role').isIn(['admin', 'guru', 'siswa'])
  ],
  authController.register);