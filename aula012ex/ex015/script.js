function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('erro') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'masculino'
            if (idade >= 0 && idade < 16) {
            // CRIANÇA
            img.setAttribute('src', 'child-male.png')
            } else if (idade < 27) {
            //JOVEM
            img.setAttribute('src', 'young-adult-male.png')  
            } else if (idade < 60) {
            //ADULTO
            img.setAttribute('src', 'adult-male.png')
            } else {
            //IDOSO
            img.setAttribute('src', 'elderly-male.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'feminino'
            if (idade >= 0 && idade < 16) {
            // CRIANÇA
            img.setAttribute('src', 'child-female.png')
            } else if (idade < 27) {
            //JOVEM
            img.setAttribute('src', 'young-adult-female.png')    
            } else if (idade < 60) {
            //ADULTO
            img.setAttribute('src', 'adult-female.png')
            } else {
            //IDOSO
            img.setAttribute('src', 'elderly-female.png')
            }
        }
        res.innerHTML = `Pessoa do sexo ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
