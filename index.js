// Import punycode for IDN support
const punycode = require('punycode');

// Retrieve the full URL
const getUrl = (url = '') => url;

// Divide URL based on "/"
const slashDivider = (url = '') => url.split('/');

// Get protocol of the URL
const getProtocol = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol;
  } catch {
    return 'Invalid URL';
  }
};

// Get domain name
const domainName = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch {
    return 'Invalid URL';
  }
};

// Get domain with protocol
const domainWithProtocol = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  } catch {
    return 'Invalid URL';
  }
};

// Get site port
const sitePort = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.port ? `Port number is: ${parsedUrl.port}` : "Couldn't find port";
  } catch {
    return 'Invalid URL';
  }
};

// Get search query
const searchQuery = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.search ? parsedUrl.search : "Search query doesn't exist";
  } catch {
    return 'Invalid URL';
  }
};

// Get path name
const pathName = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname ? parsedUrl.pathname : "Path name doesn't exist";
  } catch {
    return 'Invalid URL';
  }
};

// Get hash address
const hashAddress = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hash ? parsedUrl.hash : "Hash address doesn't exist";
  } catch {
    return 'Invalid URL';
  }
};

// Find specific string index in URL
const stringIndexFinder = (url = '', nameOfString = '') => {
  const startingIndex = url.indexOf(nameOfString);
  if (startingIndex === -1) return 'String not found';
  const endIndex = startingIndex + nameOfString.length - 1;
  return `From index ${startingIndex}, end index ${endIndex}`;
};

// Check if the URL is encrypted
const isEncrypted = (url = '') => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
};

// Validate if a string is a valid URL
const isValidUrl = (url = '') => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Add query parameter to URL
const addQueryParam = (url = '', key = '', value = '') => {
  try {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.append(key, value);
    return parsedUrl.toString();
  } catch {
    return 'Invalid URL';
  }
};

// Remove query parameter from URL
const removeQueryParam = (url = '', key = '') => {
  try {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.delete(key);
    return parsedUrl.toString();
  } catch {
    return 'Invalid URL';
  }
};

// Update query parameter in URL
const updateQueryParam = (url = '', key = '', value = '') => {
  try {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.set(key, value);
    return parsedUrl.toString();
  } catch {
    return 'Invalid URL';
  }
};

// Encode URL component
const encodeUrlComponent = (component = '') => encodeURIComponent(component);

// Decode URL component
const decodeUrlComponent = (component = '') => decodeURIComponent(component);

// Encode internationalized domain name (IDN)
const encodeIDN = (domain = '') => punycode.toASCII(domain);

// Decode internationalized domain name (IDN)
const decodeIDN = (domain = '') => punycode.toUnicode(domain);

module.exports = {
  getUrl,
  slashDivider,
  getProtocol,
  domainName,
  domainWithProtocol,
  sitePort,
  searchQuery,
  pathName,
  hashAddress,
  stringIndexFinder,
  isEncrypted,
  isValidUrl,
  addQueryParam,
  removeQueryParam,
  updateQueryParam,
  encodeUrlComponent,
  decodeUrlComponent,
  encodeIDN,
  decodeIDN
};
