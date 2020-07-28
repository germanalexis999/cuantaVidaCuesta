
var date = new Date(); //obtengo la fecha actual
var fecha1 = new Date(date.getFullYear(), date.getMonth(), 1); //primer dia del mes 
var fecha2= new Date(date.getFullYear(), date.getMonth() + 1, 0); //ultimo dias del mes 
var sabado=0 
var domingos=0
while(fecha1<=fecha2){ //mientras el primer dia del mes sea distinto 
    if(fecha1.getDay() == 0)//verifico si es domingo 
     domingos++;
     fecha1.setDate(fecha1.getDate()+1)

    if (fecha1.getDay()== 6){ //verifico si es sabado 
        sabado++;
     fecha1.setDate(fecha1.getDate()+1)
    }
   
}



function diasDelMesYAñoActual() {//obtengo la cantidad de dias del mes  
	var fecha = new Date();
	return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
}


var dias_totales= diasDelMesYAñoActual();//implemento la funcion para saber los dias 

var dias_no_trabajbles=(dias_totales-sabado)-domingos; // los dias trabajables 




/*
var entrada1=parseFloat(prompt("ingrese su sueldo bruto mensual"));
var entrada2=parseFloat(prompt("ingrese el porcentaje de su sindicato"));
*/


function calcularSueldoBruto(sueldo,S){
    let jubilacion=((sueldo)*0.11);
   
    let obrasocial=((sueldo)*0.03);
    
    let pami=((sueldo)*0.03);
  
    let sindicato=((S*sueldo)/100);
    
    let descuentoTo=jubilacion+obrasocial+pami+sindicato;
    
    let neto=sueldo-descuentoTo
    return neto;
    
}
/*
var neto_Actual=calcularSueldoBruto(entrada1,entrada2);

alert(neto_Actual);


var producto=parseFloat(prompt("ingrese el produto que desea comprar"));
var horas_ala_semana=parseFloat(prompt("ingrese la cantidad de horas que trabaja al dia "));
*/

function calcular_Valor_hora(N,D,H){
    let valorhora=((N)/(D*H))

    return valorhora
}
/*
valor_hora=calcular_Valor_hora(neto_Actual,dias_no_trabajbles,horas_ala_semana);

alert("tu hora vale");
alert(valor_hora);
*/

function Hora_Producto(v,p){

    horas_que_Cuesta=p/v;

    return horas_que_Cuesta

}
/*
alert ("usted debe trabajar un total de ");
alert (Hora_Producto(valor_hora,producto));
*/

function iniciar(){
   
    var entrada1=parseFloat(document.getElementById('sueldo_bruto').value);
    var entrada2=parseFloat(document.getElementById('sindicato').value);
    var neto_Actual=calcularSueldoBruto(entrada1,entrada2);
    var producto=parseFloat(document.getElementById('producto').value);
    var horas_ala_semana=parseFloat(document.getElementById('horas').value);
    if (horas_ala_semana>24 || entrada2<0||entrada2>10){

        alert("introduzca valores validos");
        document.getElementById("form").reset();
        document.getElementById('resultado').reset();
    }



    valor_hora=calcular_Valor_hora(neto_Actual,dias_no_trabajbles,horas_ala_semana);
    var total_que_tiene_que=Hora_Producto(valor_hora,producto);
    
    if (isNaN(total_que_tiene_que)){

        alert("por favor introdusca valores correctos o rellene todos los campos ");
        resetear()
        
    }
    
    
    else


    document.getElementById('resultado').innerHTML=Respuesta(total_que_tiene_que,horas_ala_semana);

}

function resetear(){

    
    document.getElementById('resultado').innerHTML=" ";
    document.getElementById("form").reset();
}

function Respuesta(H,D)//horas horas al dia 
{
    let dias=Math.trunc(H/D);
    let horas=Math.round(((H/D)-dias)*D);
    let minutos=((((H/D)-dias)*D)-horas).toFixed(2);
    if(minutos<=0){
        minutos=""
    }
    
    return "Debe Trabajar "+dias+" dias"+ " "+horas+" horas "+" "+ minutos;
}