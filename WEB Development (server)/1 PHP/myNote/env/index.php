<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

$_ENV["uname"] = "israt ahamed sabbir"; 
foreach ($_ENV as $key => $value) {
    echo "<p>{$key} = {$value}</p>";
}
echo "<p><b>{$_ENV['OS']}</b></p>";
echo "<p><b>{$_ENV['uname']}</b></p>";
echo exec('getmac');
?>
</body>
</html>