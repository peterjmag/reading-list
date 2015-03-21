var express = require('express');
var MetaInspector = require('node-metainspector');
var app = express();

app.get('/api/v1/urlmeta/:url', function(req, res) {
    var client = new MetaInspector(req.params.url, {});

    client.on('fetch', function () {
        res.json({
            url: client.url,
            title: client.title
        });
    });

    client.on('error', function (err) {
        res.statusCode = 404;
        res.json(err);
    });

    client.fetch();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('API server listening at http://%s:%s', host, port);
});