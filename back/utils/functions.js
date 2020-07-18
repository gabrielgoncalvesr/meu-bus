const parseSetCookies = (cookies) => {
    let list = {};

    cookies.split(';').forEach(item => {
        let parts = item.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

module.exports.parseSetCookies = parseSetCookies;