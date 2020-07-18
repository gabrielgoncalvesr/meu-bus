const { updateProfilePhoto } = require('../../repository/user');

const updateImage = async (request, response) => {

    const { email, profilePhoto } = request.body;

    if (!email || !profilePhoto) {
        return response.status(400).json({ message: "missing params" });
    }

    const result = await updateProfilePhoto({ email, profilePhoto });

    if (!result) {
        return response.status(400).json({ message: "Cannot create or update data" })
    }

    return response.sendStatus(200);
}

module.exports = {
    updateImage
}