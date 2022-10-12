//L’utente inserisce due parole in successione, con due prompt.

let parola1 = prompt('inserisci parola')

let parola2 = prompt('inserisci altra parola')

//Il software stampa prima la parola più corta, poi la parola più lunga.


if(parola1 < parola2){
    prompt(parola1 + ' ' + ' ' + parola2)
}else{
    prompt(parola2 + ' ' + ' ' + parola1)
}