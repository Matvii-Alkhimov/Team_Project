const BASE_URL='https://app.ticketmaster.com/discovery/v2/events'

const liked = JSON.parse(localStorage.getItem('liked'))

liked||localStorage.setItem('liked', "[]");

const likeEvent = function(e, id){
    try {
        liked.includes(id)||liked.push(id)
        localStorage.setItem('liked', JSON.stringify(liked))
        e.currentTarget.classList.add('liked')
        console.log(liked)
    } catch (error) {
        console.error(error)
}}

const unlikeEvent = function(e, id){
    try {
        liked.includes(id)&&liked.splice(liked.indexOf(id),1)
        localStorage.setItem('liked',JSON.stringify(liked))
        e.currentTarget.classList.remove('liked')
        console.log(liked)
    } catch (error) {
        console.error(error)
}}

const likeBtnClick = function(e){
    e.preventDefault()
    const id = 1
    liked.includes(id)?unlikeEvent(id):likeEvent(id);
}