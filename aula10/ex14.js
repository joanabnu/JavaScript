var agora = new Date()
var diasemana = agora.getDay()

/* 0 = DOMINGO
   1 = SEGUNDA 
   2 = TERÇA 
   3 = QUARTA 
   4 = QUINTA
   5 = SEXTA
   6 = SABADO */
   console.log(diasemana)
   switch(diasemana){
    case 0:
        console.log('Domingo - Dimanche -  Sonntag')
        break
    case 1:
        console.log('Segunda - feira - Lundi - Montag')
        break
    case 2:
        console.log('Terca - feira  - Mardi - Dientag ')
        break
    case 3:
        console.log('Quarta - feira - Mercredi - Mittwoch')
    case 4: 
        console.log('Quinta - feira - Jeudi - Donnerstag')
        break
    case 5:
        console.log('Sexta - feira - Vendredi - Freitag' )
        break
    case 6: 
        console.log('Sabado -  Samedi - Samstag')
        break
    default:
        console.log('Erro dia invalido' )
        break
   }