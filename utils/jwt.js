const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'no token provided'
        });
    }

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: 'authenticate failed'
            });
        }
        req.userId = decoded.id;
        next();
    });
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300
    });
}

module.exports = {
    generateToken,
    authenticateJWT
};