function fatorial(n) {
    var fat = 1

    for(var c = n; c > 1; c = c - 1) {
        fat = fat * c
    }

    return fat
}

console.log(fatorial(10))