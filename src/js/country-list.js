import cardsTemplate from '../cards-render.handlebars';
 
const select = document.getElementById('countryDropdown');
const container = document.querySelector('.cards-list');

const API_KEY = 'qn9etkDNhtdkZcjBBZRgAISaFvIyDaIP';

select.addEventListener("change", async (event) => {
  
  const country = event.target.value;

    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country}&apikey=${API_KEY}`);
   
    const data = await response.json();
 if (!data._embedded){
  return
 }
    const events = data._embedded.events;

   
    const cardsHtml = cardsTemplate(events); 
 

 container.innerHTML = cardsHtml;

});

  