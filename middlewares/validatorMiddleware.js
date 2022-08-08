const { body } = require("express-validator");

const validateRegister = [
    body('user').notEmpty().withMessage('You have to type an Username').isLength({ min: 6 }).bail().withMessage('Your username must have at least 6 characters long'),
    body('email').isEmail().withMessage('You have to type a valid email').bail(),
    body('password').isStrongPassword({ minLength: 10, minNumbers: 1, minLowercase: 1, minUppercase: 1, minSymbols: 1 }).withMessage('Your password must have at least 10 characters, one lowercase letter, one number, one uppercase letter and one of the following characters: !, @, #, ? or ]'),
]

module.exports = validateRegister;