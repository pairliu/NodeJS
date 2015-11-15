var url = require('url');

var sample = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

console.log(sample);

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' 
}
*/

var querystring = require('querystring');

var result = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
console.log(result);

/*
	{ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }
*/