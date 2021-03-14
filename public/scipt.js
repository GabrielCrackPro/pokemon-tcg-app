const API_URL = 'https://api.pokemontcg.io/v2/'
const SETS_URL = 'https://api.pokemontcg.io/v2/sets'
const CARDS_URL = 'https://api.pokemontcg.io/v2/cards'

const setsContainer = document.querySelector('.sets')
let setsArr = []
//CARDS
fetch(CARDS_URL)
    .then((res) => res.json().then(d => console.log(d.data)))
//SETS
fetch(SETS_URL)
    .then((res) => res.json().then(d => setsArr.push(d.data)))


//https://images.pokemontcg.io/${set}/logo.png
console.log(setsArr)
for (let i = 0; i <= 150; i++) {
    setsContainer.innerHTML = `
    <img src="${setsArr[i].logo}">
    `
}