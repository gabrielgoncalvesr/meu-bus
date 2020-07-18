const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts/1";

const post = async (url, query, params, headers) => {
    const response = await axios.post(`${url}?${query}`)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });

    return response;
}

const get = async (url, query, headers) => {
    const response = await axios.get(`${url}?${query}`, { headers })
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        console.log(error);
    });

    return response;
}

module.exports.post = post;
module.exports.get = get;