window.addEventListener('load', carregar);
window.addEventListener('load', novatela);
function carregar() {
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = ` Agora são ${hora}h no Brasil`



    if (hora >= 0 && hora < 12) {

        img.src = 'manhanormal.png'
        document.body.style.background = '#e7ff94'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'tardecv.png'
        document.body.style.background = '#c6f1ff'
    } else {
        img.src = 'noitecv.png'
        document.body.style.background = '#006691'

    }

}

    function novatela() {
      
        var horaParis = window.document.getElementById("horaParis");
        var img = window.document.getElementById('imagemParis');
        var horaf = new Date();
    
        // Obtém o horário de Paris
        var horarioParis = horaf.toLocaleTimeString("pt-BR", { timeZone: "Europe/Paris", hour: '2-digit', minute: '2-digit' });
        horaParis.innerHTML = `Agora são exatamente ${horarioParis} em <strong> Paris na França.</strong>`;
    
        // Obtém a hora atual em Paris
        var horaParisNumber = new Date().toLocaleString("pt-BR", { timeZone: "Europe/Paris", hour: '2-digit', hour12: false });
        
        // Converte a hora para um número
        horaParisNumber = parseInt(horaParisNumber);
    
        // Definindo as imagens de acordo com a hora
        if (horaParisNumber >= 0 && horaParisNumber < 12) {
            img.src = 'manhaparis.png';
        } else if (horaParisNumber >= 12 && horaParisNumber < 18) {
            img.src = 'tardeparis.png';
        } else {
            img.src = 'noiteparis.png';
        }
    }
    

