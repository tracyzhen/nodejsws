/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-8-23
 * Time: 下午6:35
 * To change this template use File | Settings | File Templates.
 */

exports.endsWith = function (str, endstr) {
    var endslen = parseInt(endstr.length);
    if (str.substr(-endslen, endslen) == endstr) {
        return true;
    }
    return false;
};

exports.build_shell_params = function (cmd, params) {
    var result = [cmd];
    for (var k in params) {
        if (params[k] != undefined) {
            var param = (k + '=' + params[k]);
        } else {
            var param = k;
        }
        result.push(param);
    }
    return result;
};

exports.removeSomeAttributesFromObj = function(attr_array, obj) {
    for(var k in attr_array) {
        var attr = attr_array[k];
        delete obj[attr];
    }
    return obj;
};