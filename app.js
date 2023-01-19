const entrada = document.getElementById("entrada");
const botonEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const salida = document.getElementById("salida");
const btnCopiar = document.querySelector(".btnCopiar");

const btnInfo = document.querySelector(".btnRestricciones");
const btnPegar = document.querySelector(".btnPegar");
const btnClear = document.querySelector(".btnClear");
const restricciones = document.querySelector("span");
const muneco = document.querySelector(".muneco");
const texDer = document.querySelector(".texto-der");

const inicio = () => {
  texDer.style.display = "block";
  restricciones.style.display = "block";
  salida.style.display = "none";
  btnCopiar.style.display = "none";
  btnInfo.style.display = "none";
};
inicio();

const colorTexto = (colorCopiar) => {
  if (colorCopiar) {
    btnCopiar.style.backgroundColor = "#d8dfe8";
    btnCopiar.style.color = "#0a3871";
    btnCopiar.textContent = "Copiado";
    salida.style.color = "blue";
    return;
  } else {
    btnCopiar.style.backgroundColor = "white";
    btnCopiar.style.color = "#0a3871";
    btnCopiar.textContent = "Copiar";
    salida.style.color = "#495749";
  }
};

const soloMinusculas = document.querySelector(".texto-entrada");
soloMinusculas.addEventListener("keypress", (e) => {
  letraMinuscula(e);
});
const letraMinuscula = (e) => {
  if (
    (e.keyCode > 96 && e.keyCode < 123) ||
    e.keyCode == 241 ||
    e.keyCode == 13 ||
    e.keyCode == 32 ||
    e.keyCode == 33 ||
    e.keyCode == 44 ||
    e.keyCode == 46 ||
    e.keyCode == 63 ||
    e.keyCode == 191 ||
    e.keyCode == 161
  ) {
    return true;
  } else if (e.keyCode > 47 && e.keyCode < 58) {
    alert("Los números no son válidos");
    e.preventDefault();
  } else if (e.keyCode > 64 && e.keyCode < 91) {
    alert("Letras mayúsculas no son válidos");
    e.preventDefault();
  } else if (e.keyCode == 225 || e.keyCode == 233 || e.keyCode == 237 || e.keyCode == 243 || e.keyCode == 250) {
    alert("Letras con acento no son válidos")
    e.preventDefault();
  } else {
    alert("Los carácteres especiales no son válidos");
    e.preventDefault();
  }
};

const verificacion = (e) => {
  if (e.trim() === "") {
    entrada.value = "";
    entrada.focus();
    prueba = false;
    inicio();
    restricciones.style.fontSize = "16px";
    restricciones.style.marginBottom = '5px'
    restricciones.style.color = "red";
    return;
  } else {
    prueba = true;
    restricciones.style.fontSize = "14px";
    restricciones.style.color = "#495057";
    restricciones.style.marginBottom = '0px'
  }
};

botonEncriptar.addEventListener("click", () => {
  const textoEntrada = entrada.value;
  colorTexto();
  verificacion(textoEntrada);
  if (prueba) {
    salida.style.display = "block";
    btnCopiar.style.display = "block";
    encriptar(textoEntrada);
    sinModificacion();
    muneco.style.display = "none";
    texDer.style.display = "none";
    colorPegar();
    return;
  }
});

const soloLetras = (e) => {
  key = e.keyCode || e.which;
};

btnDesencriptar.addEventListener("click", () => {
  const textoEntrada = entrada.value;
  colorTexto();
  verificacion(textoEntrada);
  if (prueba) {
    desencriptar(textoEntrada);
    sinModificacion();
    colorPegar();
  }
});

btnCopiar.addEventListener("click", () => {
  const colorCopiar = "true";
  copiarTexto(salida, colorCopiar);
});

const colorPegar = () => {
  btnPegar.style.backgroundColor = "white";
  btnPegar.style.color = "#0a3871";
  btnPegar.style.border = "1px solid #0a3871";
};

btnClear.addEventListener("click", () => {
  entrada.value = "";
  entrada.focus();
});

btnPegar.addEventListener("click", () => {
  entrada.value = salida.value;
});

const sinModificacion = () => {
  salida.classList.remove("texto-copiado");
  salida.classList.add("texto-Salida");
  salida.style.color = "#495749";
};

const copiarTexto = (salida, colorCopiar) => {
  salida.classList.add("texto-copiado");
  salida.classList.remove("texto-Salida");
  salida.select();
  document.execCommand("copy");
  salida.classList.add("texto-Salida");
  restricciones.style.display = "none";
  btnInfo.style.display = "block";
  btnPegar.style.backgroundColor = "#0A3871";
  btnPegar.style.color = "white";
  colorTexto(true);
};

const desencriptar = (textoEntrada) => {
  let desEncriptado = textoEntrada.split("enter");
  textoEntrada = desEncriptado.join("e");

  desEncriptado = textoEntrada.split("imes");
  textoEntrada = desEncriptado.join("i");

  desEncriptado = textoEntrada.split("ai");
  textoEntrada = desEncriptado.join("a");

  desEncriptado = textoEntrada.split("ober");
  textoEntrada = desEncriptado.join("o");

  desEncriptado = textoEntrada.split("ufat");
  textoEntrada = desEncriptado.join("u");

  salida.textContent = textoEntrada;
};

const encriptar = (textoEntrada) => {
  let varArray = textoEntrada.split("");

  let newArray = [];
  varArray.forEach((elemento, cont) => {
    if (elemento === "e") {
      elemento = "enter";
    }
    if (elemento === "i") {
      elemento = "imes";
    }
    if (elemento === "a") {
      elemento = "ai";
    }
    if (elemento === "o") {
      elemento = "ober";
    }
    if (elemento === "u") {
      elemento = "ufat";
    }
    return (newArray[cont] = elemento);
  });
  salida.textContent = newArray.join("");
};
