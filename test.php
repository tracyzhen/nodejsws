<!DOCTYPE>
    <html>
<head>
    <meta charset="utf8">
    <title>PHP测试</title>
</head>
<body>
<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-8-23
 * Time: 下午1:24
 * To change this template use File | Settings | File Templates.
 */
echo 'This is a php file'.'<br />';
session_start();
$_SESSION['username'] = 'zhouwei';
var_dump($_SESSION);
?>
</body>
</html>