// Descrizione
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const ul_el = document.querySelector('.list-group');
const button_el = document.querySelector('.btn');


function randomEmail() {

    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(res => res.json())
    .then(dat => {

        const {response : email} = dat

        ul_el.innerHTML += `<li class="list-group-item">${email}</li>`

    })
    .catch(err => {
        console.log(err)
    })

}

function randomEmails(qty) {

    for(let i = 0; i < qty; i++) {

        randomEmail()

    }

}

randomEmails(10)

button_el.addEventListener('click', function() {

    ul_el.innerHTML = ''
    randomEmails(10)

})



