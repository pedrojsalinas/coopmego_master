//VARIABLES GLOBALES
var tit_monto = "-";
var tit_interes = "-";
var tit_seguros = "-";
var tit_otros = "-";
var tit_gastos = "-";
var tit_total_pagar = "-";
var tit_tasa_interes = "-";
var tit_tasa_efectiva = "-";    
var tit_tasa_costo = "-";    
var tit_tipo_tabla = "-";    
var tit_plazo = "-";
var tit_tipo_garantia = "-";
var tit_destino_credito = "En que invertirÃ¡ el crÃ©dito que solicitarÃ¡";
var tit_precio_compra = "Cantidad de dinero que usted solicitarÃ¡";
var tit_aporte_socio = "Valor porcentual del precio de la vivienda con el cual usted debe contar para acceder al crÃ©dito";

var tipo_simulador = "-";
var sim_consumo = "-";
var sim_negocio = "-";            
var sim_vivienda = "-";    

//DATOS QUE SE CARGAN AL INICIO
$(document).ready(function(){    
    laod_var_globales();
    limpiar_campos();    
    cargar_cmb_tipo_tabla();
    cargar_cmb_tipo_garantia();                
});  

//SE CARGA LOS VALORES DE LAS VARIBLES GLOBALES
function laod_var_globales() {         
    var data = $(this).serializeArray();
    data.push({name:'nombre_metodo', value: 'get_var_global_credito'});        

    $.ajax({
            type: "POST",
            url: "dll/simulador_dat.php",		
            data : data,
            //contentType: "application/json; charset=utf-8",
            dataType: "json",
            //animationsEnabled: false,
            success: function(data) {                       
                    tit_monto = data.tit_monto;                                                
                    tit_interes = data.tit_interes;
                    tit_seguros = data.tit_seguros;
                    tit_otros = data.tit_otros;
                    tit_gastos = data.tit_gastos;
                    tit_total_pagar = data.tit_total_pagar;
                    tit_tasa_interes = data.tit_tasa_interes;
                    tit_tasa_efectiva = data.tit_tasa_efectiva;
                    tit_tasa_costo = data.tit_tasa_costo;
                    tit_tipo_tabla = data.tit_tipo_tabla;
                    tit_plazo = data.tit_plazo;
                    tit_tipo_garantia = data.tit_tipo_garantia;
                    tipo_simulador = data.tipo_simulador;
                    sim_consumo = data.sim_consumo;
                    sim_negocio = data.sim_negocio;
                    sim_vivienda = data.sim_vivienda;
                    cargar_valores_iniciales();                       
            },
            error: function(msg) {
                    alert('Error metodo[laod_var_globales]: ' + data.mensaje);                       
            }
    });
}

//SE CARGAN LOS VALORES INICIALES DE LOS COMPONENTES HTML
function cargar_valores_iniciales() { 
    $( "#btn_limpiar" ).button({
        icons: {primary: "ui-icon-refresh"}      
        });    
    $( "#btn_calcular" ).button({
        icons: {primary: "ui-icon-check"}      
        });     

    $("#spn_monto_int").addClass("ui-icon ui-icon-help-circle");
    $("#spn_plazo_int").addClass("ui-icon ui-icon-help-circle");
    $("#spn_tipo_gar_int").addClass("ui-icon ui-icon-help-circle");
    $("#spn_tipo_tabla_int").addClass("ui-icon ui-icon-help-circle");
    $("#spn_nivel_ventas").addClass("ui-icon ui-icon-help-circle");
    $("#spn_monto_int").tooltip({ position: { my: 'right center', at: 'left-5 center' }, content: tit_monto});    
    $("#spn_plazo_int").tooltip({ position: { my: 'right center', at: 'left-5 center' }, content: tit_plazo});    
    $("#spn_tipo_gar_int").tooltip({ position: { my: 'right center', at: 'left-5 center' }, content: tit_tipo_garantia});    
    $("#spn_tipo_tabla_int").tooltip({content: tit_tipo_tabla});

    $("#spn_monto").addClass("ui-icon-help-circle");
    $("#spn_total_pagar").addClass("ui-icon-help-circle");
    $("#spn_intereses").addClass("ui-icon-help-circle");
    $("#spn_tasa_nominal").addClass("ui-icon-help-circle");
    $("#spn_seguros").addClass("ui-icon-help-circle");
    $("#spn_tasa_efectiva").addClass("ui-icon-help-circle");
    $("#spn_otros").addClass("ui-icon-help-circle");
    $("#spn_tasa_costo").addClass("ui-icon-help-circle");    
    $("#spn_tipo_tabla").addClass("ui-icon-help-circle");
    $("#spn_monto").tooltip({content: tit_monto});
    $("#spn_total_pagar").tooltip({content: tit_total_pagar});
    $("#spn_intereses").tooltip({content: tit_interes});
    $("#spn_tasa_nominal").tooltip({content: tit_tasa_interes});
    $("#spn_seguros").tooltip({content: tit_seguros});
    $("#spn_tasa_efectiva").tooltip({content: tit_tasa_efectiva});
    $("#spn_otros").tooltip({content: tit_otros});
    $("#spn_tasa_costo").tooltip({content: tit_tasa_costo});    
    $("#spn_tipo_tabla").tooltip({content: tit_tipo_tabla});                            
    
    if (tipo_simulador == sim_vivienda)
    {       
       cargar_cmb_destino_cred(); 
       $("#spn_destino_cred").addClass("ui-icon ui-icon-help-circle");
       $("#spn_precio_compra").addClass("ui-icon ui-icon-help-circle");
       $("#spn_aporte_cliente").addClass("ui-icon ui-icon-help-circle");       
       $("#spn_destino_cred").tooltip({content: tit_destino_credito});
       $("#spn_precio_compra").tooltip({content: tit_precio_compra});
       $("#spn_aporte_cliente").tooltip({content: tit_aporte_socio});
       
       $('#txtMonto').prop('disabled', true);
//       $('#cmb_tipo_garantia').prop('disabled', true);
       $("#row_cred_vivienda_1").show();
       $("#row_cred_vivienda_2").show();
       $("#row_cred_vivienda_3").show();
       $("#lin_informacion").attr("href", '../?page_id=119');
       $("#lin_informacion").text('CrÃ©dito para su negocio');
	   $("#lin_informacion2").attr("href", '../?page_id=102');
       $("#lin_informacion2").text('CrÃ©dito para sus gastos');
       
    }
    else if(tipo_simulador == sim_negocio){
            $("#lin_informacion").attr("href", '../?page_id=102');
            $("#lin_informacion").text('CrÃ©dito para sus gastos');
            $("#row_cred_negocio_1").show();
    }
}

//SE FIJA LOS VALORES PARA TODOS LOS TOOLTIP
$(function () {
    $(document).tooltip({        
        position: { my: 'center top', at: 'center bottom+5' },        
        track: false
    });
});
  
//DIALOGO DE MENSAJES
$(function() {
    $( "#dialog" ).dialog({
      //autoOpen: false,     
    modal: true,
    height: 130,
    resizable: false,
    width: 250,
    autoOpen: false,
    buttons: {
        Ok: function() {
            $( this ).dialog( "close" );
        }
    }
    });     
  });        

//EVENTO DEL BOTON CALCULAR
$(function(){    
    $("#btn_calcular").click(function() {                                                                       
    
        var dec_monto = $("#txtMonto").val();
        var int_plazo = $("#txtPlazo").val();
        var str_garantia = $("#cmb_tipo_garantia").val();
        var str_tipo_tabla = $("#cmb_tipo_tabla").val();
        var dec_nivel_ventas = $("#txtNivelVentas").val();
       
        //SE VALIDA QUE TENGAN VALOR LOS CAMPOS DE MONTO Y PLAZO
        $("#msm_error").hide();
        var valido = true;
        if ( dec_monto.length == 0)
        {
            $("#txtMonto").addClass( "ui-state-error" );
            valido = false;
        }
        if (int_plazo.length == 0)
        {
            $("#txtPlazo").addClass( "ui-state-error" );
            valido = false;
        }        
        //SE VALIDA EL CAMPO NIVEL DE VENTAS
        if(tipo_simulador == sim_negocio){
            if (dec_nivel_ventas.length == 0){
                $("#txtNivelVentas").addClass( "ui-state-error" );
                valido = false;
            }
        }
        
        if(valido == false)           
        {
            mostrar_msm_error('');
            return;
        }                    
        
        var data = $(this).serializeArray();
        data.push({name:'nombre_metodo', value: 'calcular'});
        data.push({name:'monto', value: dec_monto});
        data.push({name:'plazo', value: int_plazo});
        data.push({name:'garantia', value: str_garantia});
        data.push({name:'tipo_tabla', value: str_tipo_tabla});
        data.push({name:'nivel_ventas', value: dec_nivel_ventas});
        
        $.ajax({
                url: "dll/simulador_dat.php",
                type: "POST",                
                data:data,
                //contentType: "application/json; charset=utf-8",
                dataType: "json",
                //--animationsEnabled : false,
                success: function(data) {
                    if(data.mensaje == ''){                                                                                           
                            fijar_valores(data);
                    }else{                        
                        mostrar_msm_error(data.mensaje);                                                
                    }
                },
                error: function() {
                        alert('Error metodo[calcular_cuota]: ' + data.mensaje);
                }            
        });                                                    
    });
});            
    
function mostrar_msm_error(str_mensaje_) {        
    //Mensaje por defecto
    var str_mensaje = "Ingrese el valor en los campos";        
    
    if ( str_mensaje_.length > 0){
        str_mensaje = str_mensaje_;        
    }
    
    var str_error_msm= "<span class='ui-icon ui-icon-alert' style='float: left; margin-right: 0.3em;'></span>"+
                    "<strong >Alerta: </strong> "+str_mensaje;
    $("#msm_error").html(str_error_msm);        
    $("#msm_error").show();    
}

function fijar_valores(data) {	
        $("#lbl_monto").val($("#txtMonto").val());         
        $("#lbl_interes").val(data.intereses);   
        $("#lbl_seguro").val(data.seguros);   
        $("#lbl_otros").val(data.otros);   
        $("#lbl_total_pagar").val(data.total_pagar);   
        $("#lbl_int_nominal").val(data.tasa + ' %');   
        $("#lbl_int_efectiva").val(data.tasa_efectiva + ' %');   
        $("#lbl_tasa_costo_finan").val(data.tasa_costo_finan + ' %');   
        $("#lbl_amortizacion").val($("#cmb_tipo_tabla :selected").text());                 
        
        //Se fija el formato de numeros
        $('#lbl_monto').formatCurrency();
        $('#lbl_monto').formatCurrency('.currencyLabel');
        $('#lbl_interes').formatCurrency();
        $('#lbl_interes').formatCurrency('.currencyLabel');
        $('#lbl_seguro').formatCurrency();
        $('#lbl_seguro').formatCurrency('.currencyLabel');
        $('#lbl_otros').formatCurrency();
        $('#lbl_otros').formatCurrency('.currencyLabel');
        $('#lbl_total_pagar').formatCurrency();
        $('#lbl_total_pagar').formatCurrency('.currencyLabel');            
    
        //SE RECARGA LA TABLA DE AMORTIZACION        
        $('#PersonTableContainer').jtable('load', {                        
            plazo_: $("#txtPlazo").val(),
            monto_: $("#txtMonto").val(),
            tasa_: data.tasa,            
            seg_desgravamen_: data.seg_desgravamen,
            tipo_tabla_: $("#cmb_tipo_tabla").val(),
            api_: data.api
        });        
        
        //SE PONE INVISIBLE LA COLUMNA CUOTA SIN SEGURO        
        if ($("#cmb_tipo_tabla").val() == 'A'){
            $('#PersonTableContainer').jtable('changeColumnVisibility','CuotaSinSeguro','hidden');
        }
        else{
            $('#PersonTableContainer').jtable('changeColumnVisibility','CuotaSinSeguro','visible');
        }
        
        //SE PRESENTA LA VENTANA CON LOS RESULTADOS
        $("#ventana_resp_sim").dialog("open");
        
}

//EVENTO DEL BOTON LIMPIAR
$(function(){    
    $("#btn_limpiar").click(function() {               
       limpiar_campos();         
    });
});    

//EVENTO CMB DESTINO CREDITO
function limpiarFormulario()
{
    limpiar_campos();           
    valoreLabels();
}  

function valoreLabels()
{    
    if($("#cmb_destino_cred").val() == 'CONSTRUCCION')
        $("#lbl_precio_compra").text('Valor Presupuesto($):');
    else   
        $("#lbl_precio_compra").text('Precio Compra($):');

    if($("#cmb_destino_cred").val() == 'TERRENO')
        $("#lbl_aporte_cliente").text('Aporte Socio >50%($):');
   else   
        $("#lbl_aporte_cliente").text('Aporte Socio >50%($):');   
}

//FUNCIONES DE JAVA SCRIPT
function isNumberKey(evt)
{
    $("#txtMonto").removeClass( "ui-state-error" );
    $("#txtPlazo").removeClass( "ui-state-error" );
    $("#txtNivelVentas").removeClass( "ui-state-error" );
    $("#msm_error").hide();
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

function porcentaje()
{
    var pAporteC=0.5;
    if($("#cmb_destino_cred").val() == 'TERRENO')
    {
        pAporteC=0.5;
    }
    var res = 0; 
    res = $("#txtPrecioCompra").val() * pAporteC;	//% aporte cliente
    $("#txtAporteCliente").val(res);
    
    montoFinanciar();
}
          
function montoFinanciar()
{
    $("#msm_error").hide();
    var pAporteC=0.5;
    //alert (document.form1.cmbTipoVivienda.value);
    if($("#cmb_destino_cred").val() == 'TERRENO')
    {
            pAporteC=0.5;
    }
    var res = 0; 
    if($("#txtAporteCliente").val() >= ($("#txtPrecioCompra").val() * pAporteC))
    {		 	
          res = $("#txtPrecioCompra").val() - $("#txtAporteCliente").val();	
          $("#txtMonto").val(res);	
    }
    else
    {            
          $("#txtMonto").val(res);
          var valP = 	pAporteC *100;
          mostrar_msm_error("El Aporte debe ser mayor o igual al "+valP+"% del valor");
          res = $("#txtPrecioCompra").val() * pAporteC;	//% aporte cliente
          $("#txtAporteCliente").val(res);	
          $("#txtAporteCliente").select();
          $("#txtAporteCliente").focus(); 

    }
}
      
      
//VALORES POR DEFECTO
function limpiar_campos() {	
    $("#msm_error").hide();
    $("#txtMonto").removeClass( "ui-state-error" );
    $("#txtPlazo").removeClass( "ui-state-error" );
    $("#txtNivelVentas").removeClass( "ui-state-error" );
    $("#txtMonto").val('');
    $("#txtPlazo").val('');   
    
    //Campos del simulador de vivienda
    $("#txtPrecioCompra").val('');
    $("#txtAporteCliente").val('');    
    $("#txtNivelVentas").val('');    
}

//SE CARGA LAS LISTAS DE OPCIONES 
function cargar_cmb_tipo_tabla() {
    $('#cmb_tipo_tabla').empty();
	var items="";        
     
        var data = $(this).serializeArray();
        data.push({name:'nombre_metodo', value: 'cargar_cmb_tipo_tabla'});
        
        
	$.ajax({
		type: "POST",
		url: "dll/simulador_dat.php",		
                data : data,
		//contentType: "application/json; charset=utf-8",
		dataType: "json",
		//animationsEnabled: false,
		success: function(response) {
                    if (response.length == 0) {
				$("#dialog").text('No existen datos para la lista Tabla de AmortizaciÃ³n');
				$("#dialog").dialog("open");                                
                    }else {                        
                         $.each(response, function(index, value) {               
                                items += "<option value='" + value.Id + "'>" + value.Nombre + "</option>";
                                $("#cmb_tipo_tabla").html(items);
                            });			                          
                    }
		},
		error: function(msg) {
                        alert('Error metodo[cargar_cmb_tipo_tabla]: ' + data.mensaje);                       
		}
	});
}

function cargar_cmb_tipo_garantia() {
    $('#cmb_tipo_garantia').empty();
	var items="";        
     
        var data = $(this).serializeArray();
        data.push({name:'nombre_metodo', value: 'cargar_cmb_tipo_garantia'});
        
        
	$.ajax({
		type: "POST",
		url: "dll/simulador_dat.php",		
                data : data,
		//contentType: "application/json; charset=utf-8",
		dataType: "json",
		//animationsEnabled: false,
		success: function(response) {
                    if (response.length == 0) {
				alert('No existen datos[cargar_cmb_tipo_garantia]: ' + data.mensaje);
                    }else {                         
                         $.each(response, function(index, value) {               
//                             if (tipo_simulador == sim_vivienda && value.Id == 'H') //Si es el simulador de vivienda se fija la opcion HIPOTECA
//                                 items += "<option value='" + value.Id + "' selected>" + value.Nombre + "</option>";
//                             else
                                items += "<option value='" + value.Id + "'>" + value.Nombre + "</option>";
                                $("#cmb_tipo_garantia").html(items);
                            });			                          
                    }
		},
		error: function(msg) {
                        alert('Error metodo[cargar_cmb_tipo_garantia]: ' + data.mensaje);                       
		}
	});
}

function cargar_cmb_destino_cred() {
    $('#cmb_destino_cred').empty();
	var items="";        
     
        var data = $(this).serializeArray();
        data.push({name:'nombre_metodo', value: 'cargar_cmb_destino_cred'});        
        
	$.ajax({
		type: "POST",
		url: "dll/simulador_dat.php",		
                data : data,
		//contentType: "application/json; charset=utf-8",
		dataType: "json",
		//animationsEnabled: false,
		success: function(response) {
                    if (response.length == 0) {
				alert('No existen datos [cargar_cmb_destino_cred]: ' + data.mensaje);
                    }else {                        
                         $.each(response, function(index, value) {               
                                items += "<option value='" + value.Id + "'>" + value.Nombre + "</option>";
                                $("#cmb_destino_cred").html(items);
                            });			                          
                    }
		},
		error: function(msg) {
                        alert('Error metodo[cargar_cmb_destino_cred]: ' + data.mensaje);                       
		}
	});
}

//VENTANA PARA PRESENTAR LOS RESULTADOS DE LA SIMULACION
$(function() {
    $( "#ventana_resp_sim" ).dialog({  
        modal: true,
        height: 670,
        resizable: false,
        width: 620,
        autoOpen: false,
        buttons: [
            {
                text: "Imprimir",
                click: imprimir,
                icons:{primary:'ui-icon-print'}                
            },
            {
                text: "MÃ¡s InformaciÃ³n",
                click: informacion,
                icons:{primary:'ui-icon-comment'}                
            },
            {
                text: "Volver",
                click: function() { $(this).dialog("close"); },
                icons:{primary:'ui-icon-arrowreturnthick-1-w'}                
            }
        ]
    });
  });
  
//IMPRESION DE LOS DATOS DE LA SIMULACION
function imprimir() {	            
    $("#iframe_imprimir").attr("src","dll/rpt_tabla_amortizacion.php?imprimir=si");          
}

//FORMULARIO CON LOS DATOS DEL CLIENTE
function informacion() {	                
    window.open('../?page_id=529','_top');
}

//METODOS PARA PRESENTAR LA TABLA DE AMORTIZACION
$(document).ready(function () {    
    //Prepare jTable    
        $('#PersonTableContainer').jtable({
                title: 'Tabla de AmortizaciÃ³n',
                paging: true,
                pageSizes: 12,  
                pageSize: 12,
                sorting: false,
                defaultSorting: 'Name ASC',
                actions: {
                        listAction: 'dll/tabla_amortizacion.php?action=list'    //,
//					createAction: 'PersonActionsPagedSorted.php?action=create',
//					updateAction: 'PersonActionsPagedSorted.php?action=update',
//					deleteAction: 'PersonActionsPagedSorted.php?action=delete'
                },
                fields: {
                        PersonId: {
                                key: true,
                                create: false,
                                edit: false,
                                list: false
                        },
                        Periodo: {
                                title: 'Div.',
                                width: '5%',
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.Periodo +"</div>";                     
                                    }
                        },
                        SaldoCap: {
                                title: 'Saldo cap.',
                                width: '20%',
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.SaldoCap +"</div>";                     
                                    }
                        },
                        MontoCap: {
                                title: 'Monto cap.',
                                width: '15%',
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.MontoCap +"</div>";                     
                                    }
                        },
                        Interes: {
                                title: 'InterÃ©s',
                                width: '15%',
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.Interes +"</div>";                     
                                    }        
                        },
                        SeguroDesg: {
                                title: 'Seguro',
                                width: '10%',
                                visibility: 'hidden',
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.SeguroDesg +"</div>";                     
                                    }        
                        },
                        Otros: {
                                title: 'Otros',
                                width: '15%',
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.Otros +"</div>";                     
                                    }
                        },                        
                        CuotaSinSeguro: {
                                title: 'Cuota',
                                width: '15%',                                
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.CuotaSinSeguro +"</div>";                     
                                    }
                        },
                        Cuota: {
                                title: 'Cuota Final',
                                width: '15%',                                
                                display : function(data){
                                    return "<div style='text-align:right;'>" + data.record.Cuota +"</div>";                     
                                    }
                        }
                },
                messages: {
                    loadingMessage: 'Cargando registros...',
                    pagingInfo: 'Registros {0}-{1} de {2}',
                    pageSizeChangeLabel: 'Registros',
                    gotoPageLabel: 'Ir a la pÃ¡gina'
                }
        });                                        
        
        //Load person list from server
        $('#PersonTableContainer').jtable('load');
});

       