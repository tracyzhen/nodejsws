/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-8-23
 * Time: 下午12:17
 * To change this template use File | Settings | File Templates.
 */

var config = require('./config'),
    util = require('./util'),
    zhttp = require('./zhttp'),
    fs = require('fs'),
    child_process = require('child_process'),
    process_pool = require('./process_pool'),
    nws_http = require('./nws_http'),
    string_decoder = require('string_decoder'),
    decoder = new string_decoder.StringDecoder('utf8'),
    querystring = require('querystring'),
    router = require('./router'),
    cluster = require('cluster'),
    numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // fork workers
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker' + worker.process.pid + ' died');
    });
    console.log('listening: http://l27.0.0.1:' + config.server_config.SERVER_PORT);
} else {
    zhttp.createServer(function (req, res) {
        req = util.parse_request(req);
        router.handle(req, res);
    }).listen(config.server_config.SERVER_PORT);
}



