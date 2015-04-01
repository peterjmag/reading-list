var express = require('express');
var bodyParser = require('body-parser');
var MetaInspector = require('node-metainspector');
var Datastore = require('nedb');

var app = express();
var db = new Datastore({ filename: 'links.db', autoload: true });

var sanitizeTitle = function (title) {
// http://stackoverflow.com/a/7764370/349353
    return title.replace(/\n/g, ' ').replace(/\s+/g,' ').trim();
};

// TODO: Improve CSP
// http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

app.post('/links/', function(req, res) {
    var client = new MetaInspector(req.body.url, {});

    client.on('fetch', function () {
        var linkData = {
            id: Date.now(),
            url: client.url,
            title: sanitizeTitle(client.title),
            host: client.host,
            image: client.image
        };

        db.insert(linkData, function (err, newDoc) {
          res.json(newDoc);
        })
    });

    client.on('error', function (err) {
        res.statusCode = 404;
        res.json(err);
    });

    client.fetch();
});

app.get('/links/', function (req, res) {
    // TODO: Sort by created date instead of ID.
    db.find({}).sort({ id: -1 }).exec(function (err, links) {
        if (err) {
            res.statusCode = 404;
            res.json(err);
        };

        res.json(links);
    });
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('API server listening at http://%s:%s', host, port);
});
