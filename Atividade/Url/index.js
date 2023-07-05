const { PassThrough } = require('stream')
const url = require ('url')
const address = 'http://www.example.com/path?param1=value1&param2=value2#section'

const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParmas)
console.log(parsedUrl.href)
console.log(parsedUrl.hash)
console.log(parsedUrl.searchParams.get('produtos'))