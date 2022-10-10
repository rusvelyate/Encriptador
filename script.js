const inputTexto = document.querySelector(".texto_encriptar"); //Crea las variables llamando a la .clase del text area
const mensaje = document.querySelector(".texto_encriptado");
const btnCopy = document.querySelector(".boton_copiar");
btnCopy.style.display = "none"

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value) //variable que almacena texto encriptado
    mensaje.value = textoEncriptado
    
    if(textoEncriptado !== ""){
        btnCopy.style.display = "block"
        mensaje.style.backgroundImage = "none";
        inputTexto.value = "";
    } else {
        swal("Opss","Escriba algún mensaje","error");
    }
    
}

function encriptar(stringEncriptada){ //recibe la la cadena de texto string
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //doble matriz
    stringEncriptada = stringEncriptada.toLowerCase(); //pasa el texto ingresado a minusculas

    for(let i = 0; i < matrizCodigo.length; i++){ //se pasan todos los caracteres del arreglo
        if(stringEncriptada.includes(matrizCodigo[i][0])){ //Verifica que la mariz contenga la vocales para que las cambie
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]) //Cambia los caracteres por los valores de la matriz
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    
    if(textoEncriptado !== ""){
        btnCopy.style.display = "block"
        mensaje.style.backgroundImage = "none";
        inputTexto.value = "";
    } else {
        swal("Opss","Escriba algún mensaje","error");
    }
}

function desencriptar(stringDesencriptada){ //recibe la la cadena de texto string
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //doble matriz
    stringDesencriptada = stringDesencriptada.toLowerCase(); //pasa el texto ingresado a minusculas

    for(let i = 0; i < matrizCodigo.length; i++){ //se pasan todos los caracteres del arreglo
        if(stringDesencriptada.includes(matrizCodigo[i][1])){ //Verifica que la mariz contenga la vocales para que las cambie
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]) //Cambia los caracteres por los valores de la matriz
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    swal("Bien","Texto copiado","success");
    setInterval("location.reload()",3000);
}