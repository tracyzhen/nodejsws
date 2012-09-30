var fs = require('fs'),
    child_process = require('child_process'),
    util = require('./util'),
    querystring = require('querystring'),
    config = require('./config');

exports.post = function (process, post_data, result_handle, req, reqObj, res) {
    var env = {
        REDIRECT_STATUS: 200, // or true, or other, such as 30x
        REQUEST_METHOD: 'POST',
        SCRIPT_FILENAME: reqObj.req_path,
        GATEWAY_INTERFACE: 'CGI/1.1',
        CONTENT_LENGTH: req.headers['content-length'], // post_data.length,
        CONTENT_TYPE: req.headers['content-type'], // 'application/x-www-form-urlencoded',
        SERVER_NAME: 'zhouwei.me',
        SERVER_PORT: config.server_config.SERVER_PORT,
        QUERY_STRING: reqObj.query_string,
        SERVER_SOFTWARE: 'nodejsws/0.01',
        SCRIPT_NAME: 'php-cgi',
        REQUEST_URI: reqObj.url.path,
//        DOCUMENT_URI: '',
        DOCUMENT_ROOT: config.server_config.ROOT_DIR,
//        SERVER_PROTOCOL: '',
        REMOTE_ADDR: '', // client ip
        REMOTE_PORT: '', // client port
        SERVER_ADDR: util.parse_host(req.headers.host).host, // server ip
        HTTPS: '',
        HTTP_REFERER: req.headers.referer,
        HTTP_ACCEPT_ENCODING: req.headers['accept-encoding'],
        HTTP_ACCEPT_LANGUAGE: req.headers['accept-language'],
        HTTP_ACCEPT_CHARSET: req.headers['charset'] || 'utf8',
        COOKIE: req.headers['cookie'],
        HTTP_ACCEPT: req.headers['accept'],
        HTTP_USER_AGENT: req.headers['user-agent'],
        ORIGIN: req.headers.origin,
        CACHE_CONTROL: req.headers['cache_control'],
        CONNECTION: req.headers['connection'],
        HTTP_HOST: req.headers.host,
        PATH_INFO: reqObj.path_info,
        PHP_SELF: reqObj.req_path
    };
    var process = child_process.spawn('php-cgi', [], {
        env: env
    });
    process.stdin.write(post_data);
    process.stdin.end();
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function (data) {
        result_handle(null, data, res);
    });
};
exports.get = function (process, result_handle, req, reqObj, res) {
    var env = {
        REDIRECT_STATUS: true,
        REQUEST_METHOD: 'GET',
        SCRIPT_FILENAME: reqObj.req_path,
        GATEWAY_INTERFACE: 'CGI/1.1',
        CONTENT_LENGTH: 0,
        CONTENT_TYPE: 'text/plain',
        SERVER_NAME: 'zhouwei.me',
        QUERY_STRING: reqObj.query_string,
        SERVER_SOFTWARE: 'nodejsws/0.01',
        SCRIPT_NAME: 'php-cgi',
        REQUEST_URI: reqObj.url.path,
//        DOCUMENT_URI: '',
        DOCUMENT_ROOT: config.server_config.ROOT_DIR,
        SERVER_PROTOCOL: 'http/1.0',
        REMOTE_ADDR: '', // client ip
        REMOTE_PORT: '', // client port
        SERVER_ADDR: '127.0.0.1', // server ip
        SERVER_PORT: config.server_config.SERVER_PORT, // server port
        HTTPS: '',
        HTTP_REFERER: req.headers.referer,
        HTTP_ACCEPT_ENCODING: req.headers['accept-encoding'],
        HTTP_ACCEPT_LANGUAGE: req.headers['accept-language'],
        HTTP_ACCEPT_CHARSET: req.headers['charset'] || 'utf8',
        COOKIE: req.headers['cookie'],
        HTTP_ACCEPT: req.headers['accept'],
        HTTP_USER_AGENT: req.headers['user-agent'],
        ORIGIN: req.headers.origin,
//        CACHE_CONTROL: req.headers['cache_control'],
        HTTP_CONNECTION: req.headers['connection'],
        HTTP_HOST: req.headers.host,
        PATH_INFO: reqObj.path_info,
        PHP_SELF: reqObj.req_path
    };
    var process = child_process.spawn('php-cgi', [], {
        env: env
    });
    process.stdin.write('');
    process.stdin.end();
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function (data) {
        result_handle(null, data, res);
    });
};

var result_handler = function (err, data, res) { // function to handle the result the php-cgi output
    var headers = {};
    var ps = util.splitResponse(data);
    var header_str = ps[0];
    var content = ps[1];
    var lines = header_str.split('\r\n');
    for (var k in lines) {
        var line = lines[k];
        if (line != '') {
            var header_pair = line.split(': '); // TODO: add exception
            headers[header_pair[0]] = header_pair[1];
        } else {
            break;
        }
    }
    res.writeHead(headers.Status != undefined ? parseInt(headers['Status'].substr(0, 3)) : 200,
        headers); // 30x redirect, 200 common
    res.write(content);
    res.end();
};

exports.result_handler = result_handler;