/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-8-23
 * Time: 下午6:35
 * To change this template use File | Settings | File Templates.
 */

exports.endsWith = function(str, endstr) {
    var endslen = parseInt(endstr.length);
    if(str.substr(- endslen, endslen) == endstr) {
        return true;
    }
    return false;
};