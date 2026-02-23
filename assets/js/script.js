// Descrizione
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/int'
const resultEl = document.getElementById('result')

fetch(endpoint)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        resultEl.innerHTML = data.response

    })

