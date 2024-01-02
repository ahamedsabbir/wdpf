<?php

spl_autoload_register(function ($class_name) {
    include 'namespace/'. $class_name . '.php';
});
use page\element as body;
$obj  = new body();
$obj->get();
//$obj2 = new header();

?>