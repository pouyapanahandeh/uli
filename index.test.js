// Import the module
const ulio = require('./index');

// Test data
const validUrl = 'https://example.com:8080/path?query=123#hash';
const invalidUrl = 'htp://invalid-url';

// Test suite

describe('URL Utility Functions', () => {
  test('getUrl should return the provided URL', () => {
    expect(ulio.getUrl(validUrl)).toBe(validUrl);
  });

  test('slashDivider should divide the URL by /', () => {
    expect(ulio.slashDivider(validUrl)).toEqual(['https:', '', 'example.com:8080', 'path?query=123#hash']);
  });

  test('getProtocol should return the protocol of a valid URL', () => {
    expect(ulio.getProtocol(validUrl)).toBe('https:');
    expect(ulio.getProtocol(invalidUrl)).toBe('Invalid URL');
  });

  test('domainName should return the domain name of a valid URL', () => {
    expect(ulio.domainName(validUrl)).toBe('example.com');
    expect(ulio.domainName(invalidUrl)).toBe('Invalid URL');
  });

  test('domainWithProtocol should return the domain with protocol', () => {
    expect(ulio.domainWithProtocol(validUrl)).toBe('https://example.com');
    expect(ulio.domainWithProtocol(invalidUrl)).toBe('Invalid URL');
  });

  test('sitePort should return the port of a valid URL', () => {
    expect(ulio.sitePort(validUrl)).toBe('Port number is: 8080');
    expect(ulio.sitePort('https://example.com')).toBe("Couldn't find port");
    expect(ulio.sitePort(invalidUrl)).toBe('Invalid URL');
  });

  test('searchQuery should return the search query of a valid URL', () => {
    expect(ulio.searchQuery(validUrl)).toBe('?query=123');
    expect(ulio.searchQuery('https://example.com')).toBe("Search query doesn't exist");
    expect(ulio.searchQuery(invalidUrl)).toBe('Invalid URL');
  });

  test('pathName should return the path name of a valid URL', () => {
    expect(ulio.pathName(validUrl)).toBe('/path');
    expect(ulio.pathName('https://example.com')).toBe('/');
    expect(ulio.pathName(invalidUrl)).toBe('Invalid URL');
  });

  test('hashAddress should return the hash of a valid URL', () => {
    expect(ulio.hashAddress(validUrl)).toBe('#hash');
    expect(ulio.hashAddress('https://example.com')).toBe("Hash address doesn't exist");
    expect(ulio.hashAddress(invalidUrl)).toBe('Invalid URL');
  });

  test('stringIndexFinder should return the correct index range of a substring', () => {
    expect(ulio.stringIndexFinder(validUrl, 'example')).toBe('From index 8, end index 14');
    expect(ulio.stringIndexFinder(validUrl, 'nonexistent')).toBe('String not found');
  });

  test('isEncrypted should return true for https URLs and false otherwise', () => {
    expect(ulio.isEncrypted(validUrl)).toBe(true);
    expect(ulio.isEncrypted('http://example.com')).toBe(false);
    expect(ulio.isEncrypted(invalidUrl)).toBe(false);
  });

  test('isValidUrl should validate URLs correctly', () => {
    expect(ulio.isValidUrl(validUrl)).toBe(true);
    expect(ulio.isValidUrl(invalidUrl)).toBe(false);
  });

  test('addQueryParam should correctly add query parameters to a URL', () => {
    expect(ulio.addQueryParam('https://example.com', 'key', 'value')).toBe('https://example.com/?key=value');
    expect(ulio.addQueryParam(invalidUrl, 'key', 'value')).toBe('Invalid URL');
  });

  test('removeQueryParam should correctly remove query parameters from a URL', () => {
    expect(ulio.removeQueryParam('https://example.com/?key=value', 'key')).toBe('https://example.com/');
    expect(ulio.removeQueryParam(invalidUrl, 'key')).toBe('Invalid URL');
  });

  test('updateQueryParam should correctly update query parameters in a URL', () => {
    expect(ulio.updateQueryParam('https://example.com/?key=value', 'key', 'newValue')).toBe('https://example.com/?key=newValue');
    expect(ulio.updateQueryParam(invalidUrl, 'key', 'newValue')).toBe('Invalid URL');
  });

  test('encodeUrlComponent should encode URL components correctly', () => {
    expect(ulio.encodeUrlComponent('hello world')).toBe('hello%20world');
  });

  test('decodeUrlComponent should decode URL components correctly', () => {
    expect(ulio.decodeUrlComponent('hello%20world')).toBe('hello world');
  });

  test('encodeIDN should encode internationalized domain names', () => {
    expect(ulio.encodeIDN('münich.com')).toBe('xn--mnich-kva.com');
  });

  test('decodeIDN should decode internationalized domain names', () => {
    expect(ulio.decodeIDN('xn--mnich-kva.com')).toBe('münich.com');
  });
});