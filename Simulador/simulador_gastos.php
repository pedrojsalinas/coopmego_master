<?php 
	extract($_POST);
	
	$tipo_garantia = $_POST['tipo_garantia'];
	$tipo_amortizacion = $_POST['tipo_amortizacion'];
	$monto = $_POST['monto'];
	$plazos = $_POST['plazos'];
	$interes = 5.65/100;
	$cuota;
	if ($tipo_amortizacion==1) {
		echo "Francesa";
		$cuota = (($monto * $interes)/(1-pow((1+$interes),-$plazos)));
		echo "La cuota fija es ". $cuota;
	}
	if ($tipo_amortizacion==2) {
		echo "Alemana";
	}

 ?>