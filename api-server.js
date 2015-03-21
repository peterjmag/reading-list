var express = require('express');
var og = require('open-graph');
var app = express();

app.get('/api/v1/urlmeta/:url', function(req, res) {
    og(req.params.url, function (err, meta) {
        if (err) {
            res.json(err);
            return;
        }

        res.json(meta)
    });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('API server listening at http://%s:%s', host, port);
});