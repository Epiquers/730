/* VARIABLES GLOBALES */
var arrayImg = ["oro01.JPG","oro02.JPG","oro03.JPG","oro04.JPG","oro05.JPG","oro06.JPG","oro07.JPG","oro10.JPG","oro11.JPG","oro12.JPG",
                "basto01.JPG","basto02.JPG","basto03.JPG","basto04.JPG","basto05.JPG","basto06.JPG","basto07.JPG","basto10.JPG","basto11.JPG","basto12.JPG",
                "copa01.JPG","copa02.JPG","copa03.JPG","copa04.JPG","copa05.JPG","copa06.JPG","copa07.JPG","copa10.JPG","copa11.JPG","copa12.JPG",
                "espada01.JPG","espada02.JPG","espada03.JPG","espada04.JPG","espada05.JPG","espada06.JPG","espada07.JPG","espada10.JPG","espada11.JPG","espada12.JPG"];
var arrayValor=[1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,];
var resultado=0;
var resultMaquina=0;
var cajaResu=document.getElementById("cajaResIn");

/* FUNCIONES DEL JUEGO */
function puedoSeguir(){
    if(resultado>7.5){
        document.getElementById("pedido").disabled=true;
        document.getElementById("plantado").disabled=true;
        document.getElementById("resultado").innerHTML="¡¡ HAS PERDIDO !!";
        cajaResu.style.backgroundColor="rgb(211, 69, 69)";
    }else{
        if(resultado==7.50){
            plantarse()
        }
    }
}

function pedirCarta(){
    var ale=Math.floor(Math.random()*arrayImg.length);
    var ruta="img/"+arrayImg[ale];
    resultado+=parseFloat(arrayValor[ale]);
    arrayImg.splice(ale,1);
    arrayValor.splice(ale,1);
    document.getElementById("imagen").innerHTML+="&nbsp<img src="+ruta+" width='180px'>&nbsp";
    document.getElementById("resJugador").innerHTML="Llevas: "+resultado;
    puedoSeguir();
}

function plantarse(){

    document.getElementById("pedido").disabled=true;
    while(resultMaquina<resultado){
        resultMaquina+=arrayValor[Math.floor(Math.random()*arrayValor.length)];
    }
    document.getElementById("resMaquina").innerHTML="La casa lleva: "+resultMaquina;
    if(resultMaquina>resultado && resultMaquina<=7.50 || resultMaquina==resultado){
        document.getElementById("resultado").innerHTML="¡¡ HAS PERDIDO !!";
        cajaResu.style.backgroundColor="rgb(211, 69, 69)";
    }
    else{
        document.getElementById("resultado").innerHTML="¡¡ HAS GANADO !!";
        cajaResu.style.backgroundColor="rgb(37, 214, 52)";
    }
        
   

}
