<!DOCTYPE html>
        <html>
<head>
    <meta charset="utf8">
    <title>Test PHP</title>
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
//header('Location: test.html');
require('./test1.php');
echo 'This is a php file'.'<br />';
session_start();
$_SESSION['username'] = 'zhouwei';
echo ($_SESSION['username']);

?>
                 <br />
        <a href="https://github.com/zoowii">Fork me</a>
<hr />
<img src="/favicon.ico" style="width: 200px; height: 200px;" title="图片" />
   </body>
</html>