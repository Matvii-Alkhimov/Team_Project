const BASE_URL='https://app.ticketmaster.com/discovery/v2/events.json?apikey=wfAi1gocagJe9lBfGlvRi4NoldweukkN'
import cardsTemplate from "../cards-render.handlebars"
const cardsUl = document.querySelector('.cards-list')

const liked = JSON.parse(localStorage.getItem('liked'))

liked||localStorage.setItem('liked', "[]");

function likeEvent(id){
    try {
        liked.includes(id)||liked.push(id)
        localStorage.setItem('liked', JSON.stringify(liked))
        console.log(liked)
    } catch (error) {
        console.error(error)
}}

function unlikeEvent(e, id){
    try {
        liked.includes(id)&&liked.splice(liked.indexOf(id),1)
        localStorage.setItem('liked',JSON.stringify(liked))
        e.currentTarget.classList.remove('liked')
        console.log(liked)
    } catch (error) {
        console.error(error)
}}

function likeBtnClick(e){
    e.preventDefault()
    const id = 1
    if(liked.includes(id)){unlikeEvent(id)}else{likeEvent(id)}
}

async function renderFilter() {
    try {
        cardsUl.innerHTML=''
        for(let i=0; i<20; i++){
            if(liked.length>i){
                const render = await fetch(`${BASE_URL}&id=${liked[i]}`)
                .then(res=> res.json())
                .then(data=>data._embedded.events)
                .then(events => {
                    const markup = cardsTemplate(events)
                    cardsUl.insertAdjacentHTML('beforeend', markup)
                    console.log(markup)
                })}else{break}
        }
    } catch (error) {
        console.error(error)
    }
}