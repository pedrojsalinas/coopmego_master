<?php
class clase_mysql{
	/*variables de conexoion*/
	var $BaseDatos;
	var $Servidor;
	var $Usuario;
	var $Clave;
	/*identificacion de error y texto de error*/
	var $Errno = 0;
	var $Error = "";
	/*identificacion de conexion y consulta*/
	var $Conexion_ID=0;
	var $Consulta_ID=0;
	/*constructor de la clase*/
	function clase_mysql($db="", $host="", $user="", $pass=""){
		$this->BaseDatos=$db;
		$this->Servidor=$host;
		$this->Usuario=$user;
		$this->Clave=$pass;
	}
	/*conexion al servidor de db*/
	function conectar($db, $host, $user, $pass){
		if($db != "")$this->BaseDatos=$db;
		if($host != "")$this->Servidor=$host;
		if($user != "")$this->Usuario=$user;
		if($pass != "")$this->Clave=$pass;
		/*conectar al servidor*/
		$this->Conexion_ID=mysql_connect($this->Servidor, $this->Usuario, $this->Clave);
		if(!$this->Conexion_ID){
			$this->Error="Ha fallado la conexion";
			return 0;
		}
		/*Conexion a la base de datos*/
		if(!mysql_select_db($this->BaseDatos, $this->Conexion_ID)){
			$this->Error="Imposible abrir la base de datos";
			return 0;
		}
		return$this->Conexion_ID;
	}
	function consulta($sql=""){
		if($sql==""){
			$this->Error="NO hay ninguna sentencia sql";
			return 0;
		}
		/*Ejecutar la cunsulta*/
		$this->Consulta_ID=mysql_query($sql, $this->Conexion_ID);
		if(!$this->Consulta_ID){
			$this->Errno=mysql_errno();
			echo $this->Errno=mysql_errno();
		}
		return $this->Consulta_ID;
	}
	/*retorna el numero de campos de la consulta*/
	function numcampos(){
		return mysql_num_fields($this->Consulta_ID);
	}
	/*retorna de campos de la consulta*/
	function numregistros(){
		return mysql_num_rows($this->Consulta_ID);
	}
	/*nombre de los campos*/
	function nombrecampo($numcampos){
		return mysql_field_name($this->Consulta_ID, $numcampos);
	}
	function verconsulta(){
		echo "<table border=1>";
		echo "<tr>";
		for ($i=0; $i < $this->numcampos() ; $i++) { 
			echo "<td>".$this->nombrecampo($i)."</td>";
		}
		echo "</tr>";
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<tr>";
			for ($i=0; $i < $this->numcampos(); $i++) { 
				echo "<td>".$row[$i]."</td>";
			}
			echo "</tr>";
		}
		echo "</table>";
	}
	/*Ver consulta index*/
	function show_index(){
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<div class='box'>";
			echo "<img src='../resources/img/$row[10]'>";
			echo "<h3>$row[1]</h3>";
			echo "<p>$row[2]</p>";
			echo "<p>$row[3]</p>";
			echo "<form method='post' action='../controller/rent_cars.php'  enctype='multipart/form-data'>";
			echo "<input id='namecars' type='hidden' name='namecars' value='$row[1]'>";
			echo "<input id='idcars' type='hidden' name='idcars' value='$row[0]'>";
			echo "<input id='date' type='date' name='date'></br></br>";
			echo "<button type='submit' class='button_rent'>Rentar a tan solo $ $row[4]</button>";
			echo "</form>";
			echo "</div>";
		}
	}
	function show_about(){
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
        	echo "<article id='columnas'>";
        	echo "<h1>$row[1]</h1>";
        	echo "<p>$row[2]</p>";	
        	echo "<p class='dark'>$row[3]</p>";
        	echo "</article>";
        	echo "<aside id='sidebar'>";
        	echo "<div class='dark'>";
        	echo "<h3>$row[4]</h3>";
        	echo "<p>$row[5]</p>";
        	echo "</div>";
        	echo "</aside>";
		}
	}
	function verconsulta_datatables_rents(){
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<tr>";
			echo "<td>".$row[2]."</td>";
			echo "<td>".$row[3]."</td>";
			echo "<td>".$row[4]."</td>";
			echo "<td>".$row[5]."</td>";
			echo "<td>".$row[7]."</td>";
			echo "<form method='post' action='../controller/return_cars.php'  enctype='multipart/form-data'>";
			echo "<input id='idcars' type='hidden' name='idcars' value='$row[1]'>";
			echo "<input id='idrents' type='hidden' name='idrents' value='$row[0]'>";
			if ($row[8]==0) {
				echo "<td><button class='button_return'>Retornar Auto</button></td>";
			}else{
				echo "<td>Auto Devuelto</td>";
			}
			
			echo "</form>";
			echo "</tr>";
		}
	}
	function verconsulta_datatables_users(){
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<tr>";
			//for ($i=0; $i < $this->numcampos(); $i++) { 
			//	echo "<td>".$row[$i]."</td>";
			//}
			if ($row[5]) {
				echo "<td>"."<img class= 'imagetable' src='../resources/img/$row[7]'>"."</td>";
			}else{
				echo "<td>"."<img class= 'imagetable' src='../resources/img/avatar.jpg'>"."</td>";
			}
			echo "<td>".$row[0]."</td>";
			echo "<td>".$row[1]."</td>";
			echo "<td>".$row[2]."</td>";
			echo "<td>".$row[3]."</td>";
			if ($row[5]==1) {
				echo "<td>".'Administrador'."</td>";
			}else{
				echo "<td>".'Cliente'."</td>";
			}
			
			echo "<td><a class='edit' href='view_update.php?var=1&id_s=$row[0]'><i class='far fa-edit'></i></a> <a class='delete' href='models.php?var=2&id_s=$row[0]'><i class='far fa-trash-alt'></i></a></td>";
			
			echo "</tr>";
		}
	}
	function verconsulta_datatables_cars(){
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<tr>";
			//for ($i=0; $i < $this->numcampos(); $i++) { 
			//	echo "<td>".$row[$i]."</td>";
			//}
			if ($row[5]) {
				echo "<td>"."<img class= 'imagetable' src='../resources/img/$row[10]'>"."</td>";
			}else{
				echo "<td>"."<img class= 'imagetable' src='../resources/img/avatar.jpg'>"."</td>";
			}
			echo "<td>".$row[3]."</td>";
			echo "<td>"."$ ".$row[4]."</td>";
			echo "<td>".$row[5]."</td>";
			echo "<td><a class='edit' href='view_update.php?var=1&id_s=$row[0]'><i class='far fa-edit'></i></a> <a class='delete' href='models.php?var=2&id_s=$row[0]'><i class='far fa-trash-alt'></i></a></td>";
			
			echo "</tr>";
		}
	}
	function verconsulta_crud(){
		echo "<table border=1>";
		echo "<tr>";
		echo "<td class='tabla_tdh'>"."Logo"."</td>";
		echo "<td class='tabla_tdh'>"."Nombres Completos"."</td>";
		echo "<td class='tabla_tdh'>"."Nro Cédula"."</td>";
		echo "<td class='tabla_tdh'>"."Correo Electronico"."</td>";
		echo "<td class='tabla_tdh'>"."Estado"."</td>";
		echo "<td class='tabla_tdh'>"."Acción"."</td>";
		//for ($i=0; $i < $this->numcampos() ; $i++) { 
		//	echo "<td class='tabla_tdh'>".$this->nombrecampo($i)."</td>";
		//}
		//echo "<td>Actualizar</td>";
		//echo "<td>Borrar</td>";
		echo "</tr>";
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<tr>";
			//for ($i=0; $i < $this->numcampos(); $i++) { 
			//	echo "<td>".$row[$i]."</td>";
			//}
			if ($row[5]) {
				echo "<td>"."<img class= 'imagetable' src='../recursos/uploads/$row[6]'>"."</td>";
			}else{
				echo "<td>"."<img class= 'imagetable' src='../recursos/uploads/avatar.jpg'>"."</td>";
			}
			echo "<td>".$row[2]." ".$row[3]."</td>";
			echo "<td>".$row[1]."</td>";
			echo "<td>".$row[5]."</td>";
			if ($row[7]==1) {
				echo "<td>"."Publico"."</td>";
			}else {
				echo "<td>"."Oculto"."</td>";
			}
			
			echo "<td><a class='edit' href='actualizar.php?var=1&id_s=$row[0]'><i class='far fa-edit'></i></a> <a class='delete' href='contactos.php?var=2&id_s=$row[0]'><i class='far fa-trash-alt'></i></a></td>";
			
			echo "</tr>";
		}
		echo "</table>";
	}
	function verconsulta_general(){
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<section class='contacto'>";
			//for ($i=0; $i < $this->numcampos(); $i++) { 
			if ($row[10]) {
				echo "<img src='../resources/img/$row[10]' title='$row[1]'>";
			}else{
				echo "<img src='../resources/img/avatar.jpg' title='$row[1]'>";
			}
			echo "<h2><span class='fas fa-car'></span> $row[1] <h3>";
			echo "<h3><span class='fas fa-asterisk'></span> "."Modelo: "."$row[3] </h3>";
			echo "<h3><span class='fas fa-asterisk'></span> "."Precio: $"."$row[4] </h3>";
			echo "<h3><span class='fas fa-asterisk'></span> $row[5] </h3>";
			echo "<h3><span class='fas fa-asterisk'></span> $row[6] </h3>";
			echo "<h3><span class='fas fa-asterisk'></span> $row[7] </h3>";
			echo "<h3><span class='fas fa-asterisk'></span> $row[8] </h3>";
			echo "<h3><span class='fas fa-asterisk'></span> $row[9] </h3>";
			echo "<form method='post' action='../controller/rent_cars.php'  enctype='multipart/form-data'>";
			echo "<input id='idcars' type='hidden' name='idcars' value='$row[0]'>";
			echo "<input id='date' type='date' name='date'>";
			echo "<button>Rentar a tan solo $ $row[4]</button>";
			echo "</form>";
			
			
			//echo "<td><a href='../controller/rent_cars.php?var=1&id_s=$row[0]&fecha=$hoy'>Rentar a tan solo $ $row[4]</a></td>";

			echo "</section>";
		}
	}
	function verconsulta_home(){
		while ($row=mysql_fetch_array($this->Consulta_ID)) {
			echo "<section class='contacto'>";
			//for ($i=0; $i < $this->numcampos(); $i++) { 
			if ($row[5]) {
				echo "<img src='../recursos/uploads/$row[6]' title='$row[1]'>";
			}else{
				echo "<img src='../recursos/uploads/avatar.jpg' title='$row[1]'>";
			}
			echo "<h2><span class='fas fa-user'></span> $row[2] $row[3] <h3>";
			echo "<h3><span class='fas fa-phone'></span> $row[4] </h3>";
			echo "<h3><span class='fas fa-envelope-open'></span> $row[5] </h3>";
			echo "<a href='../vistas/borrar.php?id_user=$row[0]' class='boton btnrojo'>Borrar</a>";
			echo "<a href='../vistas/actualizar.php?id_user=$row[0]' class='boton'>Actualizar</a><br>";
			//}
			echo "</section>";
		}
	}
	function consulta_lista(){
		while ($row = mysql_fetch_array($this->Consulta_ID)) {
			for ($i=0; $i < $this->numcampos(); $i++) { 
				$row[$i];
			}
			return $row;
		}
	}
}
?>