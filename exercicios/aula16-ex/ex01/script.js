var res = document.querySelector('select#res')
var num_text = []
var inp = document.querySelector('input#num')
var maior = 0

function adic() {
    para.innerHTML= ''
    var num = document.querySelector('input#num')
    var number = Number(num.value)
    
    if (number > 100 || number < 1 || num_text.indexOf(number) != -1) {
        window.alert('Número Inválido!')
    } else {
        num_text.push(number)
        var item = document.createElement('option')
        res.appendChild(item)
        for (var c in num_text) {
            item.text=  `Valor ${num_text[c]} adicionado.`
        }
    }

    inp.value=''
}

function fim() {
    var menor = num_text[0]
    var soma = 0
    var media = 0
    for (c=0; c < num_text.length; c = c + 1) {
        if (maior < num_text[c]) {
            maior = num_text[c]
        }

        if (menor > num_text[c]) {
            menor = num_text[c]
        }

        soma = soma + num_text[c]
    }

    media = soma / num_text.length

    
    var para = document.querySelector('p#para')
    para.innerHTML+= `Ao todo, temos ${num_text.length} número cadastrados. <br>`
    para.innerHTML+= `O maior valor informado foi ${maior}. <br>`
    para.innerHTML+= `O menor valor informado foi ${menor}. <br>`
    para.innerHTML+= `Somando todos os valores, temos ${soma}. <br>`
    para.innerHTML+= `A média dos valores é ${media}.`
}