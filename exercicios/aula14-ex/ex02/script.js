function gerar() {
    var num_text = document.querySelector('input#num')
    var num = Number(num_text.value)
    var res = document.querySelector('select#res')
    res.innerHTML= ''

    for (c = 1; c <= 10; c = c + 1) {
        var tab = num * c
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${tab}`
        res.appendChild(item)
    }
}