var fs = require('fs'),
    child_process = require('child_process'),
    util = require('./util'),
    querystring = require('querystring'),
    config = require('./config');

exports.processRequest = function (process, result_handle, req, res) {
    var env = {
        REDIRECT_STATUS:200, // or true, or other, such as 30x
        REQUEST_METHOD:req.headers['HTTP_METHOD'],
        SCRIPT_FILENAME:req.request_path,
        GATEWAY_INTERFACE:'CGI/1.1',
        CONTENT_LENGTH:req.content.length,
        CONTENT_TYPE:req.headers['Content-Type'] || 'text/plain',
        SERVER_NAME:config.server_config.SERVER_NAME,
        QUERY_STRING:querystring.stringify(req.headers['QUERY_STRING']),
        SERVER_SOFTWARE:'nodejsws/0.01',
        SCRIPT_NAME:'php-cgi',
        REQUEST_URI:req.headers['FULL_PATH'],
//        DOCUMENT_URI: '',
        DOCUMENT_ROOT:config.server_config.ROOT_DIR,
        SERVER_PROTOCOL:'HTTP/1.0',
        REMOTE_ADDR:'', // client ip
        REMOTE_PORT:'', // client port
        SERVER_ADDR:config.server_config.SERVER_ADDR, // server ip
        SERVER_PORT:config.server_config.SERVER_PORT, // server port
        HTTPS:'',
        HTTP_REFERER:req.headers['REFERER'] || '',
        HTTP_ACCEPT_ENCODING:req.headers['Accept-Encoding'],
        HTTP_ACCEPT_LANGUAGE:req.headers['Accept-Language'],
        HTTP_ACCEPT_CHARSET:req.headers['Accept-Charset'] || 'utf8',
        COOKIE:req.headers['Cookie'],
        HTTP_ACCEPT:req.headers['Accept'],
        HTTP_USER_AGENT:req.headers['User-Agent'],
        ORIGIN:req.headers['Origin'] || '',
        CACHE_CONTROL:req.headers['Cache-Control'] || 'no-cache',
        HTTP_CONNECTION:req.headers['Connection'],
        HTTP_HOST:req.headers['Host'],
        PATH_INFO:req.headers['HTTP_PATH'],
        PHP_SELF:req.request_path
    };
    var process = child_process.spawn('php-cgi', [], {
        env:env
    });
    process.stdin.write(req.content);
    process.stdin.end();
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function (data) {
        result_handle(null, data, res);
    });
};

/**
 * TODO: a bug here or somewhere else, making the socket not writable
 * @param err
 * @param data
 * @param res
 */
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
    res.writeHead(headers.Status !== undefined ? parseInt(headers['Status'].substr(0, 3)) : 200,
        headers); // 30x redirect, 200 common
    res.write(content);
    res.end();
};

exports.result_handler = result_handler;