
/**********************
Definición de funciones para el funcionamiento de la calculadora
***********************/
var operandoa;
var operandob;
var operacion;


var resultado = document.getElementById("resultado");
var dividir = document.getElementById("dividir");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicar = document.getElementById("multiplicar");
var nueve = document.getElementById("9").value;
var ocho = document.getElementById("8").value;
var siete = document.getElementById("7").value;
var seis = document.getElementById("6").value;
var cinco = document.getElementById("5").value;
var cuatro = document.getElementById("4").value;
var tres = document.getElementById("3").value;
var dos = document.getElementById("2").value;
var uno = document.getElementById("1").value;
var cero = document.getElementById("0").value;

// esta funcion toma lo que hay en resultado ysin borrar le agrega el valor de muestra 
function muestra(numero){
	document.getElementById("resultado").value = document.getElementById("resultado").value + numero;
}


igual.onclick =function(e){
	operandob = resultado.textContent;
	resolver();
}

function limpiar(){
	document.getElementById("resultado").value = ""	
}

function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}
function sumar(){
	operandoa = document.getElementById("resultado").value;
	limpiar();
	operacion= "+"	
}

function restar(){
	operandoa = document.getElementById("resultado").value;
	limpiar();
	operacion= "-"	
}

// document.getElementById("multiplica").onclick=multiplicar
function multiplica(){
	// alert("hola")
	operandoa = document.getElementById("resultado").value;
	limpiar();
	operacion= "*"	
}

function divide(){
	operandoa = document.getElementById("resultado").value;
	limpiar();
	operacion= "/"
	
}
document.getElementById("cuadrado").onclick=cuadrado;
function cuadrado(){
	operandoa = document.getElementById("resultado").value;
	limpiar();
	var cuadra= Math.pow(operandoa,2)
	document.getElementById("resultado").value = document.getElementById("resultado").value + cuadra
		
}

document.getElementById("cuadrado").onclick=cuadrado;
function cuadrado(){
	operandoa = document.getElementById("resultado").value;
	limpiar();
	var cuadra= Math.pow(operandoa,2)
	document.getElementById("resultado").value = document.getElementById("resultado").value + cuadra
	
}


function resolver(){
	var res;
	switch (operacion) {
		case "+":
			operandob = document.getElementById("resultado").value;
			alert (operandob)
			limpiar()
			res = parseFloat(operandoa) + parseFloat(operandob)
			//alert (res)
			document.getElementById("resultado").value = document.getElementById("resultado").value + res
			break;
	
		case "-":
			operandob = document.getElementById("resultado").value;
			limpiar()
			res = parseFloat(operandoa) - parseFloat(operandob)
			document.getElementById("resultado").value = document.getElementById("resultado").value + res
			break;
		
		case "*":
			operandob = document.getElementById("resultado").value;
			limpiar()
			res = parseFloat(operandoa) * parseFloat(operandob)
			document.getElementById("resultado").value = document.getElementById("resultado").value + res
			break;

		case "/":
			operandob = document.getElementById("resultado").value;
			limpiar()
			res = parseFloat(operandoa) / parseFloat(operandob)
			document.getElementById("resultado").value = document.getElementById("resultado").value + res
			break;

		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob)
			break;
		default:
			break;
	}
	resetear();
	resultado.textContent = res;
}

// function operacion(comando) {
// 	alert(comando.innerHTML);
// 	alert (document.getElementById("resultado").value);
// 	}

//CE
function eliminaCifra(valor){
	document.getElementById("resultado").value = "";
}

function eliminaCaracter(valor){
		var display = document.calculadora.resultado.value;
            if (display == "" || display == "0" || display.length == 1 && blocdel!=true){
            	document.calculadora.resultado.value = "0";
            }
            else if(blocdel!=true){
             	var res = display.substring(0,display.length-1);
             	document.calculadora.resultado.value = res;
			}
		}			


// function eliminaCararacter(valor){
// 	var valor1=document.valor.value;
// 	var valor2=valor1.substring(0,valor1.length-1);
// document.getElementById("resultado").value = "resultado".substring(0,valor1-1);
// }

function calcula(valor){
	operandoa = document.resultado.value;
	alert (operandoa);
    operandob = document.resultado.value;
		document.resultado.value = eval(operandoa + operandob);
		document.resultado.value = "";
		borrar = true;
		blocdel = true;
}