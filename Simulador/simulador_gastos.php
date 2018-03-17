<?php 
	extract($_POST);
	
	include 'general_connection.php';


	$tipo_garantia = $_POST['tipo_garantia'];
	$tipo_amortizacion = $_POST['tipo_amortizacion'];
	$monto = $_POST['monto'];
	$plazos = $_POST['plazos'];
	//$interes = 5.65/100;
	if ($monto<=1000) {
		echo "La tasa de interes es 1   ";
	}
	if ($monto>=1001 and $monto<=3000) {
		echo "La tasa de interes es 2";
	}
	if ($monto>=3001 and $monto<=5000) {
		$interes = 3/100;
		echo "La tasa de interes es 3   --------------";
		$arriba = ($monto * $interes);
		echo "Arriba = ".$arriba;
		$abajo =1 - (1 + pow((1+$interes),(-$plazos)));
		echo "Abajo = ".$abajo;
		$cuota = $arriba/$abajo;
		echo "La cuota es: ".$cuota;
	}
	if ($monto>=5001 and $monto<=10000) {
		echo "La tasa de interes es 4";
	}
	if ($monto>=10001 and $monto<=20000) {
		echo "La tasa de interes es 5";
	}
	if ($monto>=20001 and $monto<=30000) {
		echo "La tasa de interes es 6";
	}
	if ($monto>=30001 and $monto<=50000) {
		echo "La tasa de interes es 7";
	}
	if ($monto>=50001 and $monto<=1000000) {
		echo "La tasa de interes es 8";
	}
	/*if ($tipo_amortizacion==1) {
		echo "Francesa";
		//$cuota = (($monto * $interes)/(1-pow((1+$interes),-$plazos)));
		echo "La cuota fija es ". $cuota;
	}
	if ($tipo_amortizacion==2) {
		echo "Alemana";
	}*/

	echo "<h2>Meg Api</h2>";
	$sql="select * from meg_api";
	$mi_objeto->consulta($sql);
	$mi_objeto->verconsulta();
	echo "<h2>Meg Monto</h2>";
	$sql="select * from meg_monto";
	$mi_objeto->consulta($sql);
	$mi_objeto->verconsulta();
	echo "<h2>Meg Plazo</h2>";
	$sql="select * from meg_plazo";
	$mi_objeto->consulta($sql);
	$mi_objeto->verconsulta();
	echo "<h2>Meg Plazo monto Garantia</h2>";
	$sql="select * from meg_plazo_monto_garantia";
	$mi_objeto->consulta($sql);
	$mi_objeto->verconsulta();
	echo "<h2>Meg Politicas de credito</h2>";
	$sql="select * from meg_politicas_creditos";
	$mi_objeto->consulta($sql);
	$mi_objeto->verconsulta();
	echo "<h2>Meg tasa</h2>";
	$sql="select * from meg_tasa";
	$mi_objeto->consulta($sql);
	$mi_objeto->verconsulta();

 ?>