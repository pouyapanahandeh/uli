// Import URL module for IDN support
const url = require('url');

// Validate if a string is a valid URL
const isValidUrl = (urlString = '') => {
  try {
    const parsedUrl = new URL(urlString);
    return parsedUrl.protocol.startsWith('http') && parsedUrl.hostname !== '';
  } catch {
    return false;
  }
};

// Retrieve the full URL
const getUrl = (urlString = '') => urlString;

// Divide URL based on "/"
const slashDivider = (urlString = '') => urlString.split('/');

// Get protocol of the URL
const getProtocol = (urlString = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  return new URL(urlString).protocol;
};

// Get domain name
const domainName = (urlString = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  return new URL(urlString).hostname;
};

// Get domain with protocol
const domainWithProtocol = (urlString = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  return `${parsedUrl.protocol}//${parsedUrl.hostname}`;
};

// Get site port
const sitePort = (urlString = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  return parsedUrl.port ? `Port number is: ${parsedUrl.port}` : "Couldn't find port";
};

// Get search query
const searchQuery = (urlString = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  return parsedUrl.search ? parsedUrl.search : "Search query doesn't exist";
};

// Get path name
const pathName = (urlString = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  return parsedUrl.pathname ? parsedUrl.pathname : "Path name doesn't exist";
};

// Get hash address
const hashAddress = (urlString = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  return parsedUrl.hash ? parsedUrl.hash : "Hash address doesn't exist";
};

// Find specific string index in URL
const stringIndexFinder = (urlString = '', nameOfString = '') => {
  const startingIndex = urlString.indexOf(nameOfString);
  if (startingIndex === -1) return 'String not found';
  const endIndex = startingIndex + nameOfString.length - 1;
  return `From index ${startingIndex}, end index ${endIndex}`;
};

// Check if the URL is encrypted
const isEncrypted = (urlString = '') => {
  if (!isValidUrl(urlString)) return false;
  return new URL(urlString).protocol === 'https:';
};

// Add query parameter to URL
const addQueryParam = (urlString = '', key = '', value = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  parsedUrl.searchParams.append(key, value);
  return parsedUrl.toString();
};

// Remove query parameter from URL
const removeQueryParam = (urlString = '', key = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  parsedUrl.searchParams.delete(key);
  return parsedUrl.toString();
};

// Update query parameter in URL
const updateQueryParam = (urlString = '', key = '', value = '') => {
  if (!isValidUrl(urlString)) return 'Invalid URL';
  const parsedUrl = new URL(urlString);
  parsedUrl.searchParams.set(key, value);
  return parsedUrl.toString();
};

// Encode URL component
const encodeUrlComponent = (component = '') => encodeURIComponent(component);

// Decode URL component
const decodeUrlComponent = (component = '') => decodeURIComponent(component);

// Encode internationalized domain name (IDN)
const encodeIDN = (domain = '') => url.domainToASCII(domain);

// Decode internationalized domain name (IDN)
const decodeIDN = (domain = '') => url.domainToUnicode(domain);

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
