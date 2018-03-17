<?php 
	include("config.php");
	include("class_mysql.php");
	$mi_objeto= new clase_mysql();
	$mi_objeto->conectar($db_name,$host,$user_db,$user_pass);
 ?>