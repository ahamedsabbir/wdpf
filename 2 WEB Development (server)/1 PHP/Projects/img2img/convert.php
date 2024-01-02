<?php
$fileName = $_FILES['img']['name'];
$filePath = $_FILES['img']['full_path'];
$fileTemp = $_FILES['img']['tmp_name'];
$fileType = $_FILES['img']['type'];
$fileError = $_FILES['img']['error'];
$fileSize= $_FILES['img']['size'];
$image = imagecreatefromjpeg($fileTemp);