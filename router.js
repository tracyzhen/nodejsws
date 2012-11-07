var fs = require('fs'),
    util = require('./util'),
    nws_http = require('./nws_http');

exports.handle = function (req, res) {
    switch (req.type) {
        case 'php':
            handlePHP(req, res);
            break;
        case 'plain':
            handlePlain(req, res);
            break;
        case 'binary':
            handleBinary(req, res);
            break;
        default:
            handlerError(req, res);
    }
};

function handleBinary(req, res) {
    res.setHeader('Content-Type', 'binary');
    try {
        res.write(fs.readFileSync(req.request_path));
    } catch (e) {
        console.log(req);
        console.log(e);
    }
    res.end();
}

function handlePlain(req, res) {
    try {
        res.write(fs.readFileSync(req.request_path));
    } catch (e) {
        console.log(req);
        console.log(e);
    }
    res.end();
}

function handlePHP(req, res) {
    nws_http.processRequest(null, nws_http.result_handler, req, res);
}

function handlerError(req, res) {
    console.log('Error hanpened.\n');
    console.log(req);
}