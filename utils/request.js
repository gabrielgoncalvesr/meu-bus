const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts/1";

// const post = async (url, params) => {
//     const response = await axios.post('/user', params)
//         .then(function (response) {
//             return response;
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//     return response;
// }





const post = (url, query, headers) => {
    return new Promise(async (resolve, reject) => {
        try {
            headers = headers === undefined ? {} : headers;

            const result = await axios.post(`${url}${query}`,
                { headers }
            )

            console.log(result)
            resolve(result.data)
        } catch (err) {
            console.error(err)
            ///const errMessage = await validateError(err)

            reject(err)
        }
    })
}

headers: {
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    'content-type': 'application/json; charset=utf-8',
    expires: '-1',
    server: 'Microsoft-IIS/7.5',
    'x-aspnet-version': '4.0.30319',
    'set-cookie': [
      'apiCredentials=#################################; path=/; HttpOnly; SameSite=Lax'
    ],
    'x-powered-by': 'ASP.NET',
    date: 'Thu, 14 May 2020 04:23:19 GMT',
    connection: 'close',
    'content-length': '4'
  }


module.exports.post = post;