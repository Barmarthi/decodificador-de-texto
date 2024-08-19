const textoInput = document.querySelector(".texto-input");
const textoOutput = document.querySelector(".texto-output");

function btnCriptografar(){
    const textoCriptografado = criptografar(textoInput.value);
    textoOutput.value = textoCriptografado;
    textoInput.value = "";
}

function criptografar(stringCriptografada){
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function btnDescriptografar(){
    const textoDescriptografado = Descriptografar(textoInput.value);
    textoOutput.value = textoDescriptografado;
    textoInput.value = "";
}

function Descriptografar(stringDescriptografada){
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}

function btnCopiar(){
    const textoCopiar = textoOutput;
    textoCopiar.select();
    navigator.clipboard.writeText(textoCopiar.value);


}

function esconderImagem() {
    esconder = document.querySelector('.texto-output');
    esconder.style.display = '';
    }

