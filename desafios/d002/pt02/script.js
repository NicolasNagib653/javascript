function carregar(){
    var msg  = document.getElementById('msg')
    var img  = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src="img/manha.jpg"
        document.body.style.background="rgb(90, 123, 11)"
    }else if(hora >= 12 && hora < 18){
        img.src="img/tarde.jpg"
        document.body.style.background="rgb(211 103 1)"
    }else{
        img.src="img/noite.jpg"
        document.body.style.background="rgb(47, 93, 141)"
    }
}
