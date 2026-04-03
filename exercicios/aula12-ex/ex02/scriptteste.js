function verificar() {
    var res = document.getElementById('res')
    res.style.display = 'block'

    var ano = document.getElementById('ano')
    var rest = document.getElementById('rest')
    var atual = new Date()
    var anoatual = atual.getFullYear()


    if (ano.value.length == 0 || Number(ano.value) > anoatual) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoatual - Number(ano.value)
        var genero = ''
        //var img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        var img = document.getElementById('img')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'imagens/imagens-redondas/criança-masc.png'
            } else if (idade >= 10 && idade < 18) {
                //adolescente
                img.src = 'imagens/imagens-redondas/adolescente-masc.png'
            } else if (idade >= 18 && idade < 30) {
                //adulto
                img.src = 'imagens/imagens-redondas/adulto-masc.png'
            } else if (idade >= 30 && idade< 60) {
                //velho
                img.src = 'imagens/imagens-redondas/velho-masc.png'
            } else {
                //idoso
                img.src = 'imagens/imagens-redondas/idoso-masc.png'
            }

        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'imagens/imagens-redondas/criança-fem.png'
            } else if (idade >= 10 && idade < 18) {
                //adolescente
                img.src = 'imagens/imagens-redondas/adolescente-fem.png'
            } else if (idade >= 18 && idade < 30) {
                //adulto
                img.src = 'imagens/imagens-redondas/adulto-fem.png'
            } else if (idade >= 30 && idade< 60) {
                //velho
                img.src = 'imagens/imagens-redondas/velho-fem.png'
            } else {
                //idoso
                img.src = 'imagens/imagens-redondas/idoso-fem.png'
            }

        }
        rest.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        rest.appendChild(img)
    }
}
