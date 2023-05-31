function contar () {
    var begin = document.getElementById ('start')
    var finish = document.getElementById ('end')
    var stepper = document.getElementById ('count')
    var res = document.getElementById ('res')

    if (start.value.length == 0 || end.value.length == 0 || count.value.length == 0) {
        window.alert('Preencha todos os dados.')
    } else {
        res.innerHTML = 'Contando: '
        var b = Number(begin.value)
        var s = Number(stepper.value)
        var f = Number(finish.value) 

        if (b <= s) {
            for(var c = b; c <= f; c += s) {
                res.innerHTML += `${c}... `
            }
        } else {
            for(var c = b; c >= f; c -= s) {
                res.innerHTML += `${c}... `
            }
        }
      
    }
}
   

    
