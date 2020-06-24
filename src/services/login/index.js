const { getUser, updateUser } = require('../../repository/user');

const { generateToken } = require('../../../utils/jwt');
const { cryptPassword, comparePassword } = require('../../../utils/encryption');

const login = async (req, res) => {
    const { email, password } = req.body;

    // await cryptPassword(password, (hash) => {
    //     console.log("HASH: " + hash);
    // })

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

const logout = async (req, res) => {
    res.json({ auth: false, token: null });
}

module.exports = {
    login,
    logout
}