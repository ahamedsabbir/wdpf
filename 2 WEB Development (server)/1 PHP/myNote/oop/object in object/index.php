<?php
class A{
    function AFunc(){
        echo "i am form class A";
    }
}
class B{
    public $BVar;
    function __construct(){
        $this->BVar = new A;
    }
}
$ObjB = new B();
$ObjB->BVar->AFunc();