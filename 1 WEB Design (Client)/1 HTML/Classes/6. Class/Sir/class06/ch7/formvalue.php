<?php
if(isset($_POST['reg'])){
    $fh = fopen('studentinfo.txt', 'a');
    $line = $_POST['fname']." ".$_POST['mname']." ".$_POST['lname']."  | ". $_POST['mobile']."|\n";
    fwrite($fh, $line);
    fclose($fh);
    header("Location: form.html");
}
// formvalue.php?fname=ASA&mname=dfgfg&lname=Al-Mamun&mobile=01911039525&email=asamamun.web%40gmail.com&pass=555555&s=on&reg=Save+your+Information