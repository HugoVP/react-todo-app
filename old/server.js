const express = require('express');// Create App
const app     = express();
const PORT    = process.env.PORT || 1337;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express is running on ' + PORT + ' port');
});
