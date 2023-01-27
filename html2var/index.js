const express = require('express');
const app = express();
var path = require('path');

app.listen(8081, function(){
    console.log('server at 8081');
});


app.get('/', (req, res, next) => {
    res.sendFile('/index.html', { root:  "./public" });
});

app.get('/html2js', (req, res, next) => {
    res.sendFile('/html2js.html', { root:  "./public" });
});

app.use(express.static(path.join(__dirname, 'public')));