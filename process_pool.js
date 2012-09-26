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
    inited: false,
    config:function (exec_path, max_count, min_count) {
        this.exec_path = exec_path || 'php-cgi';
        this.max_count = max_count || 10;
        this.min_count = min_count || 2;
    },
    init:function () {

        for (var i = 0; i < this.min_count; i++) {
            this.createWorker();
        }
        this.inited = true;
//        for (var k in this.child_processes) {
//            var child = this.child_processes[k];
//            var input = fs.readFileSync('./test.php', 'utf8');
//            child.stdin.write(input);
//            child.stdin.end();
//            child.stdout.setEncoding('utf8');
//            child.stdout.on('data', function (d) {
//                console.log(d);
//            });
//            console.log(child.pid);
//        }

    },
    createWorker: function() {
        var child = child_process.spawn(this.exec_path);
        this.child_processes.push(child);
        child.on('exit', function (code, signal) {
//            console.log("child proc #" + this.pid + 'exit. code:' + code + 'signal: ' + signal);
            for(var k in exports.master.child_processes) {
                if(exports.master.child_processes[k] == child) {
                    exports.master.child_processes.splice(k, 1);
                }
            }
//            console.log('remaining ' + exports.master.child_processes.length + ' workers');
        });
    },
    getWorker: function() {
        if(this.child_processes.length < this.min_count) {
            this.createWorker();
        }
        return this.child_processes[0];
    }
};
exports.worker = function() {
   if(exports.master.inited == false) {
       exports.master.init();
   }
   return exports.master.getWorker();
};
