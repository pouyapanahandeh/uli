function getUrl(){
    let originalUrl = window.location.href;
    return originalUrl;
}

function slashDivider(){
    let sd = getUrl.split('/');
    return sd;
}

module.exports = [getUrl, slashDivider];