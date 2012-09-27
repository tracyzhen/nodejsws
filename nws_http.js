var fs = require('fs');
var child_process = require('child_process');
var util = require('./util');
exports.post = function (process, script_file_path, params_array, result_handle) {
    //TODO: change to post method
    var cmd_params_str = util.build_shell_params_str(params_array);
    console.log(cmd_params_str);
    var process = child_process.spawn('php-cgi',['REDIRECT_STATUS=true', 'SCRIPT_FILENAME='+script_file_path,
        'REQUEST_METHOD=POST', 'GATEWAY_INTERFACE=CGI/1.1', 'CONTENT_LENGTH='+cmd_params_str.length,
        'CONTENT_TYPE=application/x-www-form-urlencoded']);
//    var file_data = fs.readFileSync(script_file_path, 'utf8');
//    process.stdin.write(file_data);
    process.stdin.write(cmd_params_str);
    process.stdin.end();
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function (data) {
        result_handle(null, data);
    });
};
exports.get = function (process, script_file_path, params, result_handle) {
    var proc = child_process.spawn('php-cgi', util.build_shell_params(script_file_path, params));
    proc.stdout.setEncoding('utf8');
    proc.stdout.on('data', function (data) {
        result_handle(null, data);
    });
//    var file_data = fs.readFileSync(script_file_path, 'utf8');
//    process.stdin.write(file_data);
//    process.stdin.end();
//    process.stdout.setEncoding('utf8');
//    process.stdout.on('data', function(data) {
//        result_handle(null, data);
//    });
};