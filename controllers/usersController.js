const { validationResult } = require('express-validator');
const executeQuery = require('../services/mySql.service');
const bcrypt = require('bcryptjs');

const usersController = {
    register: async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            try {
                const { user, email, password } = req.body;
                const person = await executeQuery(`SELECT * FROM users WHERE email = '${email}'`);
                //Password encryption
                const hash = bcrypt.hashSync(password);

                if (person.length > 0) {
                    res.json({ message: "This Email already exists" });
                } else {
                    const response = await executeQuery(`INSERT INTO users ( email, user, password) VALUES ('${email}','${user}','${hash}')`);

                    res.status(201).json({ message: 'User created! :D' });
                }
            } catch (error) {
                res.json(error);
            }
        } else {
            res.json({ errors });
        }
    },
    login: async (req, res) => {

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            try {
                const { email, password } = req.body;
                const person = await executeQuery(`SELECT * FROM users WHERE email = '${email}'`);

                if (person.length > 0) {
                    //Coparison of the password with the hash saved in DB
                    const comparison = bcrypt.compareSync(password, person[0].password);
                    if (comparison) {
                        req.session.idUser = person[0].iduser;
                        res.status(200).json({ message: 'You are logged in !' });
                    } else {
                        res.status(400).json({ message: 'Wrong Password, please try again' });
                    }
                } else {
                    res.json({ message: "This Email doesn't exists" });
                }
            } catch (error) {
                res.json(error);
            }
        } else {
            res.json({ errors });
        }
    }
}

module.exports = usersController;