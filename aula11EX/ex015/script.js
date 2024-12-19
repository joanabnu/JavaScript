
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
         res.innerHTML = `Idade calculada: ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'velhohomem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
         if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebemulher.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovemmulher.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'mulheradulta.png')
        } else {
            img.setAttribute('src', 'velhamulher.png')
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    

    }
}