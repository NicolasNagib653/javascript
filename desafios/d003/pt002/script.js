function verificar(){
    var fano = document.getElementById("nasc")
    var res  = document.getElementById("res")
    var data = new Date()
    var ano  = data.getFullYear()

    if(fano.value.length == 0 || fano.value > ano || fano.value <= 1900){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}