
function carregar () {
    var horario = window.document.getElementById('horario')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    horario.innerHTML= `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha-uso.png'
        document.body.style.background = '#d6be76'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde-uso.png'
        document.body.style.background = '#483814'
    } else {
        img.src = 'imagens/noite-uso.png'
        document.body.style.background = '#221f18'
    }
    
}