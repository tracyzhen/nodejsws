var fs = require('fs');
var child_process = require('child_process');
var util = require('./util');
var querystring = require('querystring');
exports.post = function (process, script_file_path, post_data, query_array, result_handle) {
    var env = {
        REDIRECT_STATUS: 200, // or true, or other, such as 30x
        REQUEST_METHOD: 'POST',
        SCRIPT_FILENAME: script_file_path,
        GATEWAY_INTERFACE: 'CGI/1.1',
        CONTENT_LENGTH: post_data.length,
        CONTENT_TYPE: 'application/x-www-form-urlencoded',
        SERVER_NAME: 'nodejsws',
        QUERY_STRING: querystring.stringify(query_array),
        SERVER_SOFTWARE: 'nodejsws/0.01',
        // TODO: complete belowing, and adding them to below nws_http.post function
//        SCRIPT_NAME: 'php-cgi',
//        REQUEST_URI: '',
//        DOCUMENT_URI: '',
//        DOCUMENT_ROOT: '',
//        SERVER_PROTOCOL: '',
//        REMOTE_ADDR: '', // client ip
//        REMOTE_PORT: '', // client port
//        SERVER_ADDR: '', // server ip
//        SERVER_PORT: '', // server port
//        HTTPS: ''

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
exports.get = function (process, script_file_path, query_array, result_handle) {
//    var proc = child_process.spawn('php-cgi', util.build_shell_params(script_file_path, params));
//    proc.stdout.setEncoding('utf8');
//    proc.stdout.on('data', function (data) {
//        result_handle(null, data);
//    });
    var env = {
        REDIRECT_STATUS: true,
        REQUEST_METHOD: 'GET',
        SCRIPT_FILENAME: script_file_path,
        GATEWAY_INTERFACE: 'CGI/1.1',
        CONTENT_LENGTH: 0,
        CONTENT_TYPE: 'text/plain',
        SERVER_NAME: 'nodejsws',
        QUERY_STRING: querystring.stringify(query_array),
        SERVER_SOFTWARE: 'nodejsws/0.01'
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