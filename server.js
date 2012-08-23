/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-8-23
 * Time: 下午12:17
 * To change this template use File | Settings | File Templates.
 */

var config = require('./config');
var util = require('./util');

var http = require('http');
var fs = require('fs');
var child_process = require('child_process');

http.createServer(function (req, res) {

    var req_url = req.url;
    var req_path = config.server_config.ROOT_DIR + req_url;
    var resource_type = 'html';
    if (util.endsWith(req_path, 'ico')) {
        resource_type = 'image';
        res.writeHead(200, {'Content-Type':'binary'});
    }

    var req_method = req.method;

    for(var suffix in config.server_config.PLUGINS) {
        var command = config.server_config.PLUGINS[suffix];
        if(util.endsWith(req_path, suffix)) {
            child_process.execFile(command, [req_path, ], function (err, data) {
                res.write(data);
                res.end();
            });
            return;
        }
    }

    fs.readFile(req_path, function (err, data) {
        if (err) {
            console.log(err);
            res.end();
            return;
        }
        res.write(data);
        res.end();
    });
}).listen(8080);
