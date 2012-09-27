/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-8-23
 * Time: 下午12:22
 * To change this template use File | Settings | File Templates.
 */

exports.server_config = {
    ROOT_DIR:'.',
    PLUGINS: {
        'php': 'php-cgi', // the suffix and the executable command
        'py': 'python',
        'rb': 'ruby',
        '/': ''
//        'js': 'node'
    }
};