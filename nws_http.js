var fs = require('fs');
exports.post = function (process, script_file_path, params_array, result_handle) {

};
exports.get = function (process, script_file_path, params_array, result_handle) {
    var file_data = fs.readFileSync(script_file_path, 'utf8');
    process.stdin.write(file_data);
    process.stdin.end();
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function(data) {
        result_handle(null, data);
    });
};