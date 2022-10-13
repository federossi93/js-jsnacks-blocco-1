//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,

const partecipanti = ['luca','marco','gianni']

//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



let i = 0

let nome = prompt('inserisci il tuo nome')

let condizione = false

while (i < partecipanti.length) {
    
    if (nome == partecipanti[i] ) {
        console.log('benvenuto');
        condizione = true
    }

    i++
}