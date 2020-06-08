const express = require('express');
const app = express();
const http = require('http').createServer(app);

const port = process.env.port || 3000
http.listen(port, () => {
    console.log(`Listening on PORT ${port}`)
})