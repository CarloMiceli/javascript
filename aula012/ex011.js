var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('NÃO vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto OPCIONAL') 
} else { 
    console.log('VOTA')
}