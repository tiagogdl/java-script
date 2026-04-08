function contar() {
    var inicio_text = document.getElementById('inicio')
    var inicio = Number(inicio_text.value)

    var fim_text = document.getElementById('fim')
    var fim = Number(fim_text.value)

    var passo_text = document.getElementById('passo')
    var passo = Number(passo_text.value)

    var res = document.getElementById('res')

    res.innerHTML = 'Contando: <br>'

    if (inicio_text.value.length == 0 || fim_text.value.length == 0 || passo_text.value.length == 0) {
        alert('Preencha todos os campos!')
        return
    }
    
    if (passo == 0) {
        alert('Passo inválido! Considerando passo 1.')
        passo = 1
    }

    if (inicio < fim) {
        while (inicio <= fim) {
        res.innerHTML += `${inicio} &#x1F449 `
        inicio = inicio + passo

        }
    } else {
        while (inicio >= fim) {
        res.innerHTML += `${inicio} &#x1F449 `
        inicio = inicio - passo
        }
    }
    res.innerHTML += '&#x1F3C1'
}