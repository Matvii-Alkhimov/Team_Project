import cardsTemplate from "../cards-render.handlebars"

const select = document.getElementById('countryDropdown');
const container = document.getElementById('results');

const API_KEY = 'qn9etkDNhtdkZcjBBZRgAISaFvIyDaIP';

select.addEventListener("change", async (event) => {
  
  const country = event.target.value;

    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country}&apikey=${API_KEY}`);
   
    const data = await response.json();
    const events = data._embedded.events;

    const filteredEvents = events.filter(event => event.countryCode === country);
  
    const cardsHtml = cardsTemplate(filteredEvents); 


 container.innerHTML = cardsHtml;

});


