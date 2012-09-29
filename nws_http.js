var fs = require('fs');
var child_process = require('child_process');
var util = require('./util');
var querystring = require('querystring');
var config = require('./config');
exports.post = function (process, script_file_path, post_data, query_array, result_handle, req, path_info) {
    var env = {
        REDIRECT_STATUS: 200, // or true, or other, such as 30x
        REQUEST_METHOD: 'POST',
        SCRIPT_FILENAME: script_file_path,
        GATEWAY_INTERFACE: 'CGI/1.1',
        CONTENT_LENGTH: req.headers['content-length'], // post_data.length,
        CONTENT_TYPE: req.headers['content-type'], // 'application/x-www-form-urlencoded',
        SERVER_NAME: 'zhouwei.me',
        SERVER_PORT: config.server_config.SERVER_PORT,
        QUERY_STRING: querystring.stringify(query_array),
        SERVER_SOFTWARE: 'nodejsws/0.01',
        SCRIPT_NAME: 'php-cgi',
        REQUEST_URI: req.url,
//        DOCUMENT_URI: '',
        DOCUMENT_ROOT: config.server_config.ROOT_DIR,
//        SERVER_PROTOCOL: '',
        REMOTE_ADDR: '', // client ip
        REMOTE_PORT: '', // client port
        SERVER_ADDR: util.parse_host(req.headers.host).host, // server ip
        SERVER_PORT: util.parse_host(req.headers.host).port, // server port
        HTTPS: '',
        REFERER: req.headers.referer,
        ACCEPT_ENCODING: req.headers['accept-encoding'],
        ACCEPT_LANGUAGE: req.headers['accept-language'],
        ACCEPT_CHARSET: req.headers['charset'],
        COOKIE: req.headers['cookie'],
        ACCEPT: req.headers['accept'],
        USER_AGENT: req.headers['user-agent'],
        ORIGIN: req.headers.origin,
        CACHE_CONTROL: req.headers['cache_control'],
        CONNECTION: req.headers['connection'],
        HTTP_HOST: req.headers.host,
        PATH_INFO: path_info,
        PHP_SELF: script_file_path
    };
    var process = child_process.spawn('php-cgi', [], {
        env: env
    });
    process.stdin.write(post_data);
    process.stdin.end();
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function (data) {
        result_handle(null, data);
    });
};
exports.get = function (process, script_file_path, query_array, result_handle, req, path_info) {
    var env = {
        REDIRECT_STATUS: true,
        REQUEST_METHOD: 'GET',
        SCRIPT_FILENAME: script_file_path,
        GATEWAY_INTERFACE: 'CGI/1.1',
        CONTENT_LENGTH: 0,
        CONTENT_TYPE: 'text/plain',
        SERVER_NAME: 'zhouwei.me',
        QUERY_STRING: querystring.stringify(query_array),
        SERVER_SOFTWARE: 'nodejsws/0.01',
        SCRIPT_NAME: 'php-cgi',
        REQUEST_URI: req.url,
//        DOCUMENT_URI: '',
        DOCUMENT_ROOT: config.server_config.ROOT_DIR,
//        SERVER_PROTOCOL: '',
        REMOTE_ADDR: '', // client ip
        REMOTE_PORT: '', // client port
        SERVER_ADDR: util.parse_host(req.headers.host).host, // server ip
        SERVER_PORT: util.parse_host(req.headers.host).port, // server port
        HTTPS: '',
        REFERER: req.headers.referer,
        ACCEPT_ENCODING: req.headers['accept-encoding'],
        ACCEPT_LANGUAGE: req.headers['accept-language'],
        ACCEPT_CHARSET: req.headers['charset'],
        COOKIE: req.headers['cookie'],
        ACCEPT: req.headers['accept'],
        USER_AGENT: req.headers['user-agent'],
        ORIGIN: req.headers.origin,
//        CACHE_CONTROL: req.headers['cache_control'],
        CONNECTION: req.headers['connection'],
        HTTP_HOST: req.headers.host,
        PATH_INFO: path_info,
        PHP_SELF: script_file_path
    };
    var process = child_process.spawn('php-cgi', [], {
        env: env
    });
    process.stdin.write('');
    process.stdin.end();
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function (data) {
        result_handle(null, data);
    });
};