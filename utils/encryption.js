const bcrypt = require('bcrypt');

const cryptPassword = async (password, callback) => {
    return await bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return callback(err);
        }

        bcrypt.hash(password, salt).then(result => {
            return callback(result);
        }).catch(err => {
            return callback(err);
        });
    });
};

const comparePassword = async (password, hash, callback) => {
    return await bcrypt.compare(password, hash).then(result => {
        return callback(result);
    }).catch(err => {
        return callback(false);
    });
};

module.exports = {
    cryptPassword,
    comparePassword,
}