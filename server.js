const express = require('express');

const server = express();

server.listen(80);
console.log("hello world!!")
server.use('/',express.static('./'));