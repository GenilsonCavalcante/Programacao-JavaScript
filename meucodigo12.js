function maiuscula(){
	var letra = document.getElementById("texto").value;
	letra = letra.toUpperCase();       //A variável letra vai recerber o valor dela mesmo, só que em tudo maiúsculo.
	document.getElementById("texto").value = letra;
}