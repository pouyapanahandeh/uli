var getUrl = function(){
    let originalUrl = window.location.href;
    return originalUrl;
}

var slashDivider = function(){
    let sd = window.location.href.split('/');
    return sd;
}

let getProtocol = () => {
    let gp = location.protocol;
    return gp;
}

let domainName = () => {
    let dn = location.hostname;
    return dn;
}

let domainWithProtocol = () => {
    let dwp = location.origin;
    return dwp;
}

let sitePort = () => {
    let sp = location.port;
    if(sp){
        return "port number is: " + sp;
    } else {
        return "couldn't find port";
    }
    
}

let searchQuery = () => {
    let sq = location.search;
    if(sq){
        return sq;
    } else{
        return "search query doesn't exist";
    }
    
}

let pathName = () => {
    let pn = location.pathname;
    if(pn){
        return pn;
    } else {
        return "path name doesn't exist";
    }
    
}

let hashAddress = () => {
    let ha = location.hash;
    if(ha){
        return ha;
    } else {
        return "hash address doesn't exist";
    }
}

let StringIndexFinder = (nameOfString) => {
    let stringToArray = nameOfString.split('');
    let stringArrayLength = stringToArray.length;
    let startingIndex = getUrl().indexOf(nameOfString);
    let endIndex = parseInt(stringArrayLength) + parseInt(startingIndex) - 1;
    return "from index " + startingIndex + ", end index " + endIndex ;
} 


let isEncrypted = () => {
    if(getUrl().includes("https")){
        return true + " this wesbiste is encrypted";
    } else {
        return false + "this website is not encrypted";
    }
}

module.exports = {
    getUrl: getUrl,
    slashDivider: slashDivider,
    getProtocol: getProtocol,
    domainName: domainName, 
    domainWithProtocol: domainWithProtocol,
    sitePort: sitePort,
    searchQuery: searchQuery,
    pathName: pathName,
    hashAddress: hashAddress, 
    StringIndexFinder: StringIndexFinder,
    isEncrypted: isEncrypted,
  }