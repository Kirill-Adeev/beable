let express = require('express');
let server = express();
server.use(express.static(__dirname + '/allure-report'));
server.listen(3000);
