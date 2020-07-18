const { getUser, createUser } = require('../../repository/user');

const { generateToken } = require('../../../utils/jwt');
const { cryptPassword, comparePassword } = require('../../../utils/encryption');

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await getUser({ email });

    if (user) {
        await comparePassword(password, user.password, (valid) => {
            if (valid) {
                const token = generateToken(user.id);

                res.json({ ...user, token })
            } else {
                res.status(400).json({ message: 'incorrect password' });
            }

        })
    } else {
        res.status(400).json({ message: 'user not found' });
    }
}

const createNewUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "missing params" });
    }

    await cryptPassword(password, (hash) => {
        const newUser = async () => {
            const result = await createUser({ name, email, password: hash, profilePhoto: 'user-icon1' });

            if (!result) {
                return res.status(400).json({ message: "Cannot create user" })
            }

            return res.sendStatus(200);
        }

        newUser();
    })
}

module.exports = {
    login,
    createNewUser
}