/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-8-23
 * Time: 下午12:17
 * To change this template use File | Settings | File Templates.
 */

var config = require('./config'),
    util = require('./util'),
    http = require('http'),
    fs = require('fs'),
    child_process = require('child_process'),
    process_pool = require('./process_pool'),
    nws_http = require('./nws_http'),
    string_decoder = require('string_decoder'),
    decoder = new string_decoder.StringDecoder('utf8'),
    querystring = require('querystring'),
    router = require('./router');

http.createServer(function (req, res) {
    var reqObj = util.parse_request(req);

    // new version with router
    router.handle(reqObj, req, res);
}).listen(config.server_config.SERVER_PORT);
console.log('listening: http://l27.0.0.1:' + config.server_config.SERVER_PORT);
