  
/* --------------------------------------------- 

* Filename:     custom.js
* Version:      1.0.0 (2014-10-14)
* Website:      http://www.zymphonies.com
                http://www.freebiezz.com
* Description:  System Js
* Author:       Zymphonies Dev Team
                info@zymphonies.com

-----------------------------------------------*/

jQuery(document).ready(function($) {
  var by = document.getElementById('copyright');
  var copyright = "<p class='copyright'>Copyright © 2018  </p> ";
  var designed = "<p class='credits'> Designed by  <a href='#'> Charlie - Pedro - Willy</a></p>"; 
  by.innerHTML = copyright+designed+"<div class='clear'></div>";
  document.getElementById('edit-submitted-tabla-de-amortizacion').value='La tabla de Amortizacion se mostrará aquí';
  document.getElementById("edit-submitted-tabla-de-amortizacion").disabled = true;
  var select = document.getElementById('edit-submitted-seleccione-el-tipo-de-amortizacion');
  select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    if (selectedOption.text=='Frances') {
      var D=0;
        var g=0;
        var F=0;
        var r=0;
        var aj="";
        var l="\r";
        var b="                               ";
        var K="_____________________________________"+"_____________________________________";
        var s="$ ";
        function iA(){
        this.length=iA.arguments.length;
          for(var i=0;i<this.length;i++){
            this[i]=iA.arguments[i];
          }
        };
        var I=new iA(10);
        var f=new iA(16);
        I[0]=1;
        for(var i=0;i<9;i++){
          I[i+1]=I[i]*10;
        }
        f[0]=.1;f[1]=.01;f[2]=.001;f[3]=.0001;f[4]=.00001;f[5]=.000001;f[6]=.0000001;
        f[7]=.00000001;f[8]=.000000001;f[9]=.0000000001;f[10]=.00000000001;f[11]=.000000000001;f[12]=.0000000000001;
        f[13]=.00000000000001;f[14]=.000000000000001;f[15]=.0000000000000001;
        var C="01234567890";
        var t="";
        var c="";
        function stn(){
          D=0;
          pos=c.indexOf(".");
          o="";
          if(pos> -1){
            o=c.substring(pos+1,c.length);
            c=c.substring(0,pos);
          }
          T=c.length;
          for(var i=T-1;i> -1;i--){
            t=c.substring(i,i+1);
            pos=C.indexOf(t);
            D+=pos*I[T-i-1];
          }
          if(o!=""&&o.length>v){
            pos=C.indexOf(o.charAt(v+1));
            if(pos>4){
              pos=C.indexOf(o.charAt(v));
              o=o.substring(0,v-1)+(pos+1);
            }
          }
          if(o!=""){
            for(var i=0;i<v;i++){
              t=o.substring(i,i+1);
              pos=C.indexOf(t);
              D+=pos*f[i];
            }
          }
        };
        function computeForm(){
          Q="";
          U="";
          L=1;
          i=((F/360)*365)/12/100;
          m=0;
          for(var G=0;G<r;G++)L=L*(1+i);
            ab=(g*L*i)/(L-1);
          m+=ab;
          ah=((r*m)-g);
          prtSched();
        };
        function prtSched(){
          m+=.01;
          c="";
          c+=m;
          fmtIt();
          v=2;
          stn();
          m=D;
          af=((F/360)*365)/12/100;
          if(V<14){
            V=14;
          }
          ag="<table border=1><tr><th class='cabecera'>Cuota<br>Numero</th><th class='cabecera'>Cuota<br>Monto</th><th class='cabecera'>Interes<br>Monto</th><th class='cabecera'>Reduccion del<br>Capital</th><th class='cabecera'>Capital<br>Adeudado</th></tr>";
          ae="</table>";
          Q="Cuotas: "+document.getElementById('edit-submitted-interes').value+" Monto : "+s+document.getElementById('edit-submitted-monto').value+" al "+document.getElementById('edit-submitted-plazo-meses').value+"%."+l+K+l+" Cuota         Cuota       Interes     Reduccion del    Capital"+l+"Numero        Monto        Monto         Capital       Adeudado"+l+K+l;
          ai=g;
          ac=ah+g;
          c="";
          c+=ac;
          fmtIt();
          ad=s+c;
          for(var G=0;G<r;G++){
            J=(g*af);
            c="";
            c+=J;
            fmtIt();
            O=s+c;
            H=m-J;
            if(H>g){
              H=g;
            }
            c="";
            c+=H;
            fmtIt();
            R=s+c;
            g-=H;
            c="";
            c+=g;
            fmtIt();
            aa=s+c;
            if(m>(J+H)){
              m=J+H;
            }
            c="";
            c+=m;
            fmtIt();
            P=s+c;
            c="";
            c+=(G+1)+".";
            Q+=b.substring(0,2)+c+b.substring(0,12-c.length)+P+b.substring(0,14-P.length)+O+b.substring(0,14-O.length)+R+b.substring(0,14-R.length)+aa+l;
            U+="<tr><td class='fondo_tabla'>"+(G+1)+"</td><td class='fondo_tabla'>"+P+"</td><td class='fondo_tabla'>"+O+"</td><td class='fondo_tabla'>"+R+"</td><td class='fondo_tabla'>"+aa+"</td></tr>";
          }

          var disc = "  Monto total a pagar = " + ad + l;
          var temporal = $('.form-textarea-wrapper.resizable.textarea-processed.resizable-textarea');
          temporal.attr('id','tablas');
          var tabla = document.getElementById('tablas');
          tabla.innerHTML ="<table>"+ag + U + "<tr><td class='total' colspan='5'>"+disc+"</td></tr>" + ae+"</table>";
          event.preventDefault();
          return true;
        };
        function fmtIt(){
          pos=c.indexOf(".");
          if(pos==0){
            c="0"+c;
            pos++;
          }
          if(pos<0){
            c+=".00";
            pos=c.indexOf(".");
          }
          c+="0000";
          c=c.substring(0,pos+4);
          t=c.charAt(c.length-1);
          pos=C.indexOf(t);
          c=c.substring(0,c.length-1);
          if(pos>5){
            fmtIt1();
          }
        };
        function fmtIt1(){
          for(var B=c.length-1;B> -1;B--){
            t=c.charAt(B);
            M=C.indexOf(t);
            if(M<0){
              B--;
            }else{
              c=c.substring(0,B)+C.substring(M+1,M+2)+c.substring(B+1,c.length);
              if(M!=9){B= -1;
              }
            }
          }
        };
        function mensaje(){
          alert("Meses deben ser de"+" 1 a 999, Monto del Prestamo de 1 a "+I[9]+" y el Interes de .001 a 99%");
        }


      $('.webform-submit.button-primary.form-submit').click(function testIt(form){
        //alert("Se esocgio frandecs");
          console.log('entra al testit');
          c=document.getElementById('edit-submitted-monto').value;
          fmtIt();
          V=c.length+3;
          v=2;
          stn();
          g=D;
          c=document.getElementById('edit-submitted-plazo-meses').value;
          v=4;
          stn();
          F=D;
          c=document.getElementById('edit-submitted-interes').value;
          v=0;
          stn();
          r=D;
          if(r<1||r>999||F<.0001||F>99||g<1||g>I[9]){
            mensaje();
          }else{
            computeForm();
          }
        //event.preventDefault();
                
      });
 }else if(selectedOption.text=='Aleman') {
      var c;
  var C="01234567890";
  var K="_______________________________________"+"______________________________________";
  function alrt(){
    alert("Prestamo debe ser de 1 a 1000000000, Tasa de Interes de .01 a 99"+" y los Periodos deben ser de 1 a 999");
  };
  function fmtIt(){
    pos=c.indexOf(".");
    if(pos==0){
      c="0"+c;
      pos++;
    }
    if(pos<0){
      c+=".00";
      pos=c.indexOf(".");
    }
    c+="0000";
    c=c.substring(0,pos+4);
    t=c.charAt(c.length-1);
    pos=C.indexOf(t);
    c=c.substring(0,c.length-1);
      if(pos>5){
        fmtIt1();
      }
  };
  function fmtIt1(){
    for(var B=c.length-1;B> -1;B--){
      t=c.charAt(B);
      M=C.indexOf(t);
      if(M<0){
        B--;
      }else{
        c=c.substring(0,B)+C.substring(M+1,M+2)+c.substring(B+1,c.length);
        if(M!=9){
          B= -1;
        }
      }
    }
  };
  function roundOff(value,aB){
    value=""+value;
    aB=parseInt(aB);
    var aq=""+Math.round(value*Math.pow(10,aB));
    var aD=aq.length-aB;
    if(aD!=0){
      result=aq.substring(0,aD);
      result+=".";
      result+=aq.substring(aD,aq.length);
    }else{
      result=aq;
    }
    return result;
  };
      console.log('Amortizacion Alemana escogida');
      $('.webform-submit.button-primary.form-submit').click(function calcIt(){
        var aL,ar,aw,an,ao,aG,ap,aC,az,aE,aF,av;
    var ax,aA,ay,at,au,as;
    var header;
    var ag="<table border=1><tr><th class='cabecera'>Cuota</th><th class='cabecera'>Monto<br> Inicial</th><th class='cabecera'>Monto<br>Final</th><th class='cabecera'>Capital</th><th class='cabecera'>Interes</th><th class='cabecera'>Cuota</th><th class='cabecera'>Total</th></tr>";
    var ae="</table>";
    var aH="";
    var b="                               ";
    var Q="";
    var U="";
    var l="\r";
    var monto = document.getElementById('edit-submitted-monto').value;
    //alert(monto);
    var plazo = document.getElementById('edit-submitted-plazo-meses').value;
    //alert(plazo);HIce pequeño cambio entre plazo y interes
    var interes = document.getElementById('edit-submitted-interes').value;
    //alert(interes);
    //alert(monto," " , plazo, " " ,interes);
    ar=monto;
    aw=plazo;
    an=interes;
    if(an<1||an>999||aw<.01||aw>99||ar<1||ar>1000000000){
      alrt();
      return false;
    }
    aH="Cuotas : "+interes+" Monto:  $ "+monto+" al "+plazo+"%."+l+K+l;
    //aH="Cuotas : "+document.am.aK.value+" Monto:  $ "+document.am.aJ.value+" al "+document.am.aI.value+"%."+l+K+l;
    ao=0;
    aG=aw/100/360*365;
    ap=ar;
    az=ar/an;
    av=0;
    header="Cuota Monto Inicial  Monto Final  Capital   Interes   Cuota         Total"+l+K+l;
    do{
      aE=ap*(aG/12);
      aF=az+aE;
      aC=ap-az;
      av=av+aF;
      c="";
      c+=roundOff(ap,2);
      fmtIt();
      ax=c;
      c="";
      c+=roundOff(aC,2);
      fmtIt();
      aA=c;
      c="";
      c+=roundOff(az,2);
      fmtIt();
      ay=c;
      c="";
      c+=roundOff(aE,2);
      fmtIt();
      at=c;
      c="";
      c+=roundOff(aF,2);
      fmtIt();
      au=c;
      c="";
      c+=roundOff(av,2);
      fmtIt();
      as=c;
      ap=aC;
      c=""+(++ao);
      Q+=b.substring(0,5-c.length)+ao+b.substring(0,12-ax.length)+ax+b.substring(0,14-aA.length)+aA+b.substring(0,10-ay.length)+ay+b.substring(0,10-at.length)+at+b.substring(0,10-au.length)+au+b.substring(0,14-as.length)+as+l;
      U+="<tr><td class='fondo_tabla'>"+ao+"</td><td class='fondo_tabla'>"+ax+"</td><td class='fondo_tabla'>"+aA+"</td><td class='fondo_tabla'>"+ay+"</td><td class='fondo_tabla'>"+at+"</td><td class='fondo_tabla'>"+au+"</td><td class='fondo_tabla'>"+as+"</td></tr>";
    }while(ao<an);
    //var disc = "* Existen posibles variaciones (errores de redondeo)" + l + "este calculador sólo es una referencia";
    //document.getElementById('edit-submitted-tabla-de-amortizacion').value=aH+header+Q+l+K+l;
    //document.am.ak.value=aH+header+Q+l+K+l;
    //document.am.al.value=ag+U+ae;  
    //document.getElementById("edit-submitted-tabla-de-amortizacion").disabled = true;
    var temporal = $('.form-textarea-wrapper.resizable.textarea-processed.resizable-textarea');
    temporal.attr('id','tablas');
    var tabla = document.getElementById('tablas');
    tabla.innerHTML ="<table>"+ag+U+ae+"</table>";
    event.preventDefault();
    return true;
  
      });
    }
    
  });



  $('.nav-toggle').click(function() {
    $('#medit-submitted-plazo-mesesn-menu div ul:first-child').slideToggle(250);
    return false;
  });
  if( ($(window).width() > 640) || ($(document).width() > 640) ) {
      $('#medit-submitted-plazo-mesesn-menu li').mouseenter(function() {
        $(this).children('ul').css('display', 'none').stop(true, true).slideToggle(250).css('display', 'block').children('ul').css('display', 'none');
      });
      $('#medit-submitted-plazo-mesesn-menu li').mouseleave(function() {
        $(this).children('ul').stop(true, true).fadeOut(250).css('display', 'block');
      })
        } else {
    $('#medit-submitted-plazo-mesesn-menu li').each(function() {
      if($(this).children('ul').length)
        $(this).append('<span class="drop-down-toggle"><span class="drop-down-arrow"></span></span>');
    });
    $('.drop-down-toggle').click(function() {
      $(this).parent().children('ul').slideToggle(250);
    });
  }
 
});