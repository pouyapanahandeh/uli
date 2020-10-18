var getUrl = function(){
    let originalUrl = window.location.href;
    return originalUrl;
}

var slashDivider = function(){
    let sd = getUrl().split('/');
    return sd;
}

module.exports = getUrl;
module.exports = slashDivider;