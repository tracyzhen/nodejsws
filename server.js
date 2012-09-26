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
var process_pool = require('./process_pool');
var nws_http = require('./nws_http');

http.createServer(function (req, res) {

    var req_url = req.url;
    var req_method = req.method;
//    console.log(req);
    var req_path = config.server_config.ROOT_DIR + req_url;
    var tmp1 = req_path.split('?');
    if (tmp1.length > 1) {
        var lower_tmp1 = tmp1[0].toLowerCase();
        if (util.endsWith(lower_tmp1, 'png') || util.endsWith(lower_tmp1, 'jpg') || util.endsWith(lower_tmp1, 'bmp')) {
            req_path = tmp1[0];
        }
    }
    var resource_type = 'html';
    if (util.endsWith(req_path, 'ico')) {
        resource_type = 'image';
//        res.writeHead(200, {'Content-Type':'binary'});
        res.setHeader('Content-Type', 'binary');
    }

    var req_method = req.method;

    for (var suffix in config.server_config.PLUGINS) {
        var command = config.server_config.PLUGINS[suffix];
        var tmp1 = req_path.split('?');
        var php_get_params = [];
        if (tmp1.length > 1) {
            req_path = tmp1[0];
            var tmp2 = tmp1[1];
            php_get_params = tmp2.split('&');
        }
        var exec_array = [req_path];
        for (var tmp3 in php_get_params) {
            exec_array.push(tmp3);
        }
        var params = {};
        for (var k in php_get_params) {
            var tmp = php_get_params[k].split('=');
            if (tmp.length > 1) {
                params[tmp[0]] = tmp[1];
            } else if (tmp.length == 1) {
                params[tmp[0]] = '';
            }
        }
        if (util.endsWith(req_path, suffix)) {
            if(!util.endsWith(req_path, '.php')) {
                if(util.endsWith(req_path, '/')) {
                    req_path += 'index.php';
                } else {
                    req_path += '/index.php';
                }
            }
            var result_handler = function (err, data) { // function to handle the result the php-cgi output
                var lines = data.split('\r\n');
                var headers = {};
                var line;
                var content = '';
                var is_ended_header = false;
                var k = 0;
                for (k in lines) {
                    line = lines[k];
                    if(is_ended_header) {
                        content = line;
                        break;
                    }
                    if (line != "") {
                        var header_pair = line.split(': ');
                        headers[header_pair[0]] = header_pair[1];
                    } else {
                        is_ended_header = true;
//                        break;
                    }
                }
                res.writeHead(headers.Status != undefined ? parseInt(headers['Status'].substr(0, 3)) : 200,
                    headers); // 307 redirect, 200 common
                res.write(content);
                res.end();
            };
            if (req_method == 'GET') {
                nws_http.get(process_pool.worker(), req_path, params, result_handler);
            } else {
                nws_http.post(process_pool.worker(), req_path, params, result_handler);
            }
//            child_process.execFile(command, req_method == 'GET' ? exec_array : [req_path], result_handler);
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
}).listen(80);
console.log('listening: http://l27.0.0.1:80');
