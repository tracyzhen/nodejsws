var child_process = require('child_process'),
    fs = require('fs'),
    http = require('http'),
    util = require('./util'),
    config = require('./config');

exports.master = {
    exec_path:'php-cgi',
    max_count:10,
    min_count:2,
    child_processes:[],
    config:function (exec_path, max_count, min_count) {
        this.exec_path = exec_path || 'php-cgi -b 127.0.0.1:9000';
        this.max_count = max_count || 10;
        this.min_count = min_count || 2;
    },
    init:function () {
        for (var i = 0; i < this.min_count; i++) {
            var child = child_process.spawn(this.exec_path);
            this.child_processes.push(child);
            child.on('exit', function (code, signal) {
                console.log("child proc #" + this.pid + 'exit. code:' + code + 'signal: ' + signal);
            });
        }
        for (var k in this.child_processes) {
            var child = this.child_processes[k];
//           child.kill('SIGINT');
            var input = fs.readFileSync('./test.php', 'utf8');
            child.stdin.write(input);
            child.stdin.end();
            child.stdout.setEncoding('utf8');
            child.stdout.on('data', function (d) {
                console.log(d);
            });
            console.log(child.pid);
        }

    }
};
exports.child_proc = function () {

};
