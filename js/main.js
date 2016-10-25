//Cambio de idioma a formulario//	
function traduccion(){
//Cambio de titulo//	
	document.getElementById('form-signin-heading').innerHTML ='Por favor inicia sesión';
//Cambio de estilo de letra a titulo//
	document.getElementById('form-signin-heading').style.fontFamily='Comic Sans';	
//Cambio de color de letra de titulo//
	document.getElementById('form-signin-heading').style.color='#800080';
//Cambio de texto para ingresar el email// 	
	document.getElementById('inputEmail').placeholder ='Correo Electrónico';
//Cambio de texto para ingresar contraseña//	
	document.getElementById('inputPassword').placeholder ='Contraseña';
//Cambio de texto ventana recordar datos//	
	document.querySelector('span').innerHTML ='Recordar datos';
//Cambio de texto de boton//	
	document.querySelector('button').textContent='Iniciar Sesión';
//Cambio de color de fondo de boton//	
	document.querySelector('button').style.backgroundColor= '#f6546a';
//Cambio de color de fondo//
	document.querySelector('body').style.background='#e6e6fa';		

}