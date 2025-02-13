/* VARIABLES GLOBALES */
var arrayImg=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg"];
var arrayValor=[1,2,3,4,5,6,7,0.5,0.5]
var resultado=0;
var resultMaquina=0;

/* FUNCIONES DEL JUEGO */
function puedoSeguir(){
    if(resultado>7.5){
        document.getElementById("pedido").disabled=true;
        document.getElementById("plantado").disabled=true;
        document.getElementById("demo2").innerHTML="HAS PERDIDO!!";
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
    document.getElementById("demo").innerHTML+="<img src="+ruta+" width='100px'>";
    document.getElementById("result").innerHTML="Llevas: "+resultado;
    puedoSeguir();
}

function plantarse(){

    document.getElementById("pedido").disabled=true;
    while(resultMaquina<resultado){
        resultMaquina+=arrayValor[Math.floor(Math.random()*arrayValor.length)];
    }
    document.getElementById("resMaquina").innerHTML="La casa lleva: "+resultMaquina;
    if(resultMaquina>resultado && resultMaquina<=7.50 || resultMaquina==resultado){
        document.getElementById("demo2").innerHTML="HAS PERDIDO!!";
    }
    else{
        document.getElementById("demo2").innerHTML="HAS GANADO!!";
    }
        
   

}
