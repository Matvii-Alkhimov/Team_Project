import cardsTemplate from "../cards-render.handlebars"

document.getElementById("countryDropdown").addEventListener("change", async function () {

  try {

    const country = this.value;
    const apiKey = "qn9etkDNhtdkZcjBBZRgAISaFvIyDaIP";  
  
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country}&apikey=${apiKey}`);
    const data = await response.json();
    const events = data._embedded.events;
    console.log(data);
    const filteredEvents = events.filter(event => event.countryCode === country);
  
    const cardsHtml = cardsTemplate(filteredEvents); 


document.getElementById('results').innerHTML = cardsHtml;

  } catch (error){

    console.log(error)
  }
});

 










































// const selectEl = document.getElementById('countrySelect'); 
// const cardsContainer = document.getElementById('cards');
 
// async function fetchEvents(id) {
// try {
//   const country = await fetch (`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`);
//   const res = await country.json();
//   return res;

// } catch (error) {
//   console.log(error);
// }
  
// }

// async function filterEvents() {

//   const countryCode = selectEl.value;
  
//   const events = await fetchEvents(countryCode);

 
//   const filteredEvents = events.filter(event => {
//     return event.countryCode === countryCode; 
//   });

 
//   const cardsHtml = cardsTemplate(filteredEvents);

//   document.getElementById('cards').innerHTML = cardsHtml;

// }

 
// selectEl.addEventListener('change', filterEvents); 

 
// filterEvents();