## ulio, simple package for URLs.
> version one.

### Installation
```npm i ulio --save```

#### How to use ulio:
```js 
const {domainName, domainWithProtocol} = require('ulio');

console.log(domainWithProtocol());
console.log(domainName());
``` 

### Optiones

#### Get URL:
```js
getUrl()
```

#### Divide URL base on "/":
```js 
slashDivider()
```

#### Get domain protocol:
```js
getProtocol()
```

#### Get domain name with protocol:
```js
domainName()
```

#### Get domain with protocol:
```js
domainWithProtocol()
```

#### Get domain port:
```js
sitePort()
```

#### Get domain search query:
```js
searchQuery()
```

#### Get domain path name:
```js
pathName()
```

#### Get domain hash address:
```js
hashAddress()
```

#### Find specific string index in domain:
```js
StringIndexFinder("writeStringHere")
```

#### Check domain if it's encrypted or not:
```js
isEncrypted()
```

