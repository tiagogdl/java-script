var amigo = {nome: 'José',
    peso: 85, 
    sexo: 'Mas',
    engordar(p=0){    
        console.log('Ele engordou!')
        this.peso += p 
    }
}
amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)