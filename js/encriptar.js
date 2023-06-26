var inputTexto =  document.getElementById('inputTexto');
var outputTexto = document.getElementById('outputTexto');
var sinResultados = document.getElementById('sinResultados');
var conResultados = document.getElementById('conResultados');
var clavesEncriptar = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};
var clavesDesencriptar = {
  'ai':    'a',
  'enter': 'e',
  'imes':  'i',
  'ober':  'o',
  'ufat':  'u'
};

function encriptarTexto() {
	var textoIngresado = inputTexto.value;
	var textoResultado = '';

	if (textoIngresado != '') {
		textoResultado = textoIngresado.replace(/[aeiou]/g, function(match) {
	  		return clavesEncriptar[match];
	  	});

	  	outputTexto.value = textoResultado;
	  	inputTexto.value = "";
	  	sinResultados.style.display = "none";
	  	conResultados.style.display = "flex";
	  	inputTexto.focus();
	  	ajustarAlturaTextArea();
  	}
}

function desencriptarTexto() {
	var textoIngresado = inputTexto.value;
	var textoResultado = '';

	if (textoIngresado != '') {
		textoResultado = textoIngresado.replace(/ai|enter|imes|ober|ufat/g, function(match) {
	  		return clavesDesencriptar[match];
	  	});

	  	outputTexto.value = textoResultado;
	  	inputTexto.value = "";
	  	sinResultados.style.display = "none";
	  	conResultados.style.display = "flex";
	  	inputTexto.focus();
	  	ajustarAlturaTextArea();
  	}
}

function copiar() {
	outputTexto.select();
	document.execCommand("copy");
	sinResultados.style.display = "flex";
  	conResultados.style.display = "none";
  	inputTexto.focus();
}

function ajustarAlturaTextArea() {
  outputTexto.style.height = "auto";
  outputTexto.style.height = outputTexto.scrollHeight + "px";
}

document.addEventListener("DOMContentLoaded", function() {
  inputTexto.focus();
});

if (window.matchMedia("(max-width: 375px)").matches) {
	function limitarMinusculas() {
		var valor = inputTexto.value.toLowerCase();
		inputTexto.value = valor.replace(/[^a-z\s.,?¿]/g, '');
		// funcion + ajustar texto
		inputTexto.style.height = "auto";
		inputTexto.style.height = inputTexto.scrollHeight + "px";
	}
} else {
	function limitarMinusculas() {
		var valor = inputTexto.value.toLowerCase();
		inputTexto.value = valor.replace(/[^a-z\s.,?¿]/g, '');
	}
}