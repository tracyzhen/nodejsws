var fs = require('fs'),
    util = require('./util'),
    nws_http = require('./nws_http');

exports.handle = function (reqObj, req, res) {
    switch (reqObj.type) {
        case 'php':
            handlePHP(reqObj, req, res);
            break;
        case 'plain':
            handlePlain(reqObj, res);
            break;
        case 'binary':
            handleBinary(reqObj, res);
            break;
        default:
            handlerError(reqObj, res);
    }
};

function handleBinary(reqObj, res) {
    res.setHeader('Content-Type', 'binary');
    try {
        res.write(fs.readFileSync(reqObj.req_path));
    } catch (e) {
        console.log(reqObj);
        console.log(e);
    }
    res.end();
}

function handlePlain(reqObj, res) {
    try {
        res.write(fs.readFileSync(reqObj.req_path));
    } catch (e) {
        console.log(reqObj);
        console.log(e);
    }
    res.end();
}

function handlePHP(reqObj, req, res) {
    if (reqObj.request_method == 'GET') {
        nws_http.get(null, nws_http.result_handler, req, reqObj, res);
    } else {
        req.on('data', function (data) {
            var post_data = data;
            nws_http.post(null, post_data, nws_http.result_handler, req, reqObj, res);
        });
    }
}

function handlerError(reqObj, res) {
    console.log('Error hanpened.\n');
    console.log(reqObj);
}