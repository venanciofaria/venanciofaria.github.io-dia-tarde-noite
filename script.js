

    
function verificar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`

    if(hora >= 0 && hora < 12){
       img.src = 'manha.png'
       document.body.style.background = '#f9eac3'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tardep.png'
        document.body.style.background = '#00a8ff'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#191970'
    }
}
