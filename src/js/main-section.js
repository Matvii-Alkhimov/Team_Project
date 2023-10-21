
import cardsTemplate from "../cards-render.handlebars"
const cardsUl = document.querySelector('.cards-list')

fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=wfAi1gocagJe9lBfGlvRi4NoldweukkN")
.then(res=> res.json())
.then(data=>data._embedded.events)
.then(events => {
    const markup = cardsTemplate(events)
    cardsUl.innerHTML = markup
})




















