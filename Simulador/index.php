<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>formulario</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
	<h1>Formulacio de amortizacion</h1>
	<form action="simulador_gastos.php" method="POST">
		<label>Monto</label>
		<input type="number" name="monto">
		<br><label>Plazo(Meses)</label>
		<input type="text" name="plazos">
		<br><label>Tipo de garantia</label>
		<select id="tipo_garantia" name="tipo_garantia">
			<option value="0">--------</option>
			<option value="1">Firmas</option>
			<option value="2">Hipoteca</option>
		</select>
		<br><label>Tipo de amortizacion</label>
		<select id="tipo_amortizacion" name="tipo_amortizacion">
			<option value="0">--------</option>
			<option value="1">Cuota Fija (Francesa)</option>
			<option value="2">Capital Fijo (Alemana)</option>
		</select>
	<button>Generar</button>
	</form>
	<!--input id="servicioSelecionado" name="nom_Servicio" -->

</body>
</html>