
import cardsTemplate from "../cards-render.handlebars"
const cardsUl = document.querySelector('.cards-list')
const likedButton = document.querySelector(".liked-button")
console.log(likedButton)

const fetchEvents = async() => {
  const response= await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=wfAi1gocagJe9lBfGlvRi4NoldweukkN")
  const events = await response.json()
 return events 
  
}

const renderEvents = async() => {
try{
const data = await fetchEvents()
const events = await data._embedded.events
const markup = cardsTemplate(events)
    cardsUl.innerHTML = markup
}catch(error){
  console.log(error)
}
}

renderEvents()
cardsUl.addEventListener("click", like)

function like(event){
  if(event.target.nodeName === 'BUTTON'){
    console.log(event.target.nodeName)
    event.target.classList.add("liked")
  }

}

















