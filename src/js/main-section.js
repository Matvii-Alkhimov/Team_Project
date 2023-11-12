
import cardsTemplate from "../cards-render.handlebars"
const cardsUl = document.querySelector('.cards-list')
const likedButton = document.querySelector(".liked-button")

const fetchEvents = async() => {
  const response= await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=wfAi1gocagJe9lBfGlvRi4NoldweukkN")
  const events = await response.json()
  return events;
}

fetchEvents()
.then(data=>data._embedded.events)
.then(events => {
    const markup = cardsTemplate(events)
    cardsUl.innerHTML = markup
})
.catch(error => console.log(error))


likedButton.addEventListener("click", changeTheme)

function changeTheme(){
  likedButton.classList.add(liked)
}

















