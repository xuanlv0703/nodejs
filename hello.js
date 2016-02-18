// Load the http module to create an http server.
var http = require('http');
// Load the lorem-ipsum module
var loremIpsum = require('lorem-ipsum');
// Generate 2 paragraphs of text
var dummyOutput = loremIpsum(
{
count: 2, // Number of words, sentences, or paragraphs to generate.
units: 'paragraphs' // Generate words, sentences, or paragraphs.
});
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.end("Hello World\n\n" + dummyOutput);
});
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");