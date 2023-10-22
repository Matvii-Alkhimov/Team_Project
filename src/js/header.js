const headerSerchInput = document.querySelector('.search-box input#countryName')
const selectCountry = document.querySelector('.select-box select')
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events/k7vGFKzleBdwS/images.json?apikey=G54BzBe6OKEVYrbTC4hVXGtHDspAOWwv'
// headerSerchInput.addEventListener('input', searchMusics)

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