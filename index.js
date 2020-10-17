function getUrl(){
    let originalUrl = global.location.href;
    return originalUrl;
}

function slashDivider(){
    let sd = getUrl.split('/');
    return sd;
}

module.exports = [getUrl, slashDivider];