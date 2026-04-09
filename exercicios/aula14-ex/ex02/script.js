function gerar() {
    var num_text = document.querySelector('input#num')
    var res = document.querySelector('select#res')
    res.innerHTML= ''

    if (num_text.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        var num = Number(num_text.value)
        for (c = 1; c <= 10; c = c + 1) {
            var tab = num * c
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${tab}`
            res.appendChild(item)
        }
    }
}   