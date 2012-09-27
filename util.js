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

exports.build_shell_params_str = function (params) {
    var str = '';
    var is_first = true;
    for (var k in params) {
        if(!is_first) {
            str += ' ';
        } else {
            is_first = false;
        }
        if (params[k] != undefined || params[k] == '') {
            str += (k + '=' + params[k]);
        } else {
            str += k;
        }
    }
    return str;
};

exports.build_shell_params = function (cmd, params) {
    var result = [cmd];
    for (var k in params) {
        if (params[k] != undefined || params[k] == '') {
            var param = (k + '=' + params[k]);
        } else {
            var param = k;
        }
        result.push(param);
    }
    return result;
};

exports.removeSomeAttributesFromObj = function (attr_array, obj) {
    for (var k in attr_array) {
        var attr = attr_array[k];
        delete obj[attr];
    }
    return obj;
};

exports.splitResponse = function (str) {
    var ps = str.split('\r\n\r\n');
    if (ps.length <= 0) {
        return ['', str];
    } else if (ps.length == 1) {
        return [ps[0], ''];
    } else {
        var header_length = ps[0].length;
        return [ps[0], str.substr(header_length + 4, str.length - header_length - 4)];
    }
};

exports.parse_post_data = function (data) {
    var result = {};
    var tmp1 = data.split('&');
    for (var k in tmp1) {
        var param_pair = tmp1[k].split('=');
        if (param_pair.length <= 0) {
            result[tmp1[k]] = '';
        } else if (param_pair.length == 1) {
            result[param_pair[0]] = '';
        } else {
            result[param_pair[0]] = param_pair[1];
        }
    }
    return result;
};

