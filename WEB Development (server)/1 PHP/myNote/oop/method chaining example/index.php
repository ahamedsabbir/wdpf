<?php
class A{
    public $number = 5;
    public function AFunc(){
        $this->number = 5;
        return $this;
    }
    public function BFunc(){
        $this->number += 5;
        return $this;
    }
    public function CFunc(){
        $this->number += 5;
        return $this;
    }
}
$ObjA = new A;
echo $ObjA->AFunc()->BFunc()->CFunc()->number;