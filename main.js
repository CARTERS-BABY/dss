var classificaçao;
function classificar ()
{
navigator.mediaDevices.getUserMedia({
    audio: true 
})
classificaçao = ml5. soundClassifier('https://teachablemachine.withgoogle.com/models/kJ56AcgIl/model.json',modelo)
}
function modelo (){
    classificaçao.classify(pegarresultado) 
}
function pegarresultado (error, result ){
if (error){
    console.log(error)
}
else {
    console.log (result)
}


}

var img1 = document.getElementById ('alien1')
var img2 = document.getElementById ('alien2')
var img3 = document.getElementById ('alien3')
var img4 = document.getElementById ('alien4')
if (resultado == 'palma') {
    img1.src ='a.jpg'
}
else if(resultado == 'estralo' )
{ img1.src =''
}
else (resultado == 'musica' )
{ img1.src =''
}
