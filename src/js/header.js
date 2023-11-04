import searchedCardTpl from '../render-serched-cards.handlebars'

const headerSerchInput = document.querySelector('.search-box input#countryName')
const selectCountry = document.querySelector('.select-box select')
const mainCardsList = document.querySelector('.main-section .cards-list')
const allFilterEl = document.getElementById('all-text')
const likedFilterEl = document.getElementById('liked-text')
headerSerchInput.addEventListener('input', renderSearchedCards)
likedFilterEl.addEventListener('click', renderLikedCards)
allFilterEl.addEventListener('click', renderCards)

async function fetchCountries() {
    try {
        const country =  await fetch(`https://restcountries.com/v3.1/all`)
        const gotCountry =  await country.json() 
        return gotCountry
    } catch (error) {
        console.log(error);
    }
}

async function renderCountries() {
    const countriesArray =  fetchCountries()
    countriesArray.then(countries => {
        const countriesLength = countries.length
        const sortedCountryes = sortCountries(countries)
        for (let i = 0; i < countriesLength; i++) {
            selectCountry.innerHTML += `<option value="${i+1}">${sortedCountryes[i]}</option>`
        }
    })
}
renderCountries()

function sortCountries(countries) {
    const countriesArray = []
    for (country of countries) {
        countriesArray.push(country.name.common)
    }
    const sortCountries = countriesArray.sort()
    return sortCountries
}


async function fetchMusics() {
    try {
        const musicsData =  await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=G54BzBe6OKEVYrbTC4hVXGtHDspAOWwv`)
        const musicsDataArray =  await musicsData.json() 
        const gotMusicsData = musicsDataArray._embedded.events
        return gotMusicsData
    } catch (error) {
        console.log(error);
    }
}


async function renderSearchedCards(event) {
    const inputValue = event.target.value
    if (inputValue !== '') {
        mainCardsList.innerHTML = ''
        fetchMusics(inputValue)
        .then((music)=> {
            for (let i = 0; i < music.length; i++) {
                const cardName = music[i].name.toLowerCase()
                if (cardName.includes(inputValue.toLowerCase()) && inputValue !== '') {
                    mainCardsList.innerHTML += searchedCardTpl(music[i])
                }
            }
        });
    }
}

async function renderCards() {
    mainCardsList.innerHTML = ''
    fetchMusics()
    .then((music)=> {
        for (let i = 0; i < music.length; i++) {
            mainCardsList.innerHTML += searchedCardTpl(music[i])
        }
    });
}

async function renderLikedCards() {
    const liked = JSON.parse(localStorage.getItem('liked'))
    mainCardsList.innerHTML = ''
    fetchMusics()
    .then((music)=> {
        for (let i = 0; i < music.length; i++) {
            if (liked.includes(music[i].id)) {
                mainCardsList.innerHTML += searchedCardTpl(music[i])
            }
        }
    });
}
