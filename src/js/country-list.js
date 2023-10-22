document.getElementById("countryDropdown").addEventListener("change", async function () {
  const country = this.value;
  const apiKey = "qn9etkDNhtdkZcjBBZRgAISaFvIyDaIP";  

 
  document.getElementById("results").innerHTML = "";

  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country}&apikey=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP помилка! Статус: ${response.status}`);
    }
    const data = await response.json();
    const events = data._embedded.events;
    const resultsContainer = document.getElementById("results");

    if (events.length === 0) {
      resultsContainer.innerHTML = "Подій не знайдено";
    } else {
      const ul = document.createElement("ul");
      events.forEach((event) => {
       
        if (event._embedded.venues[0].countryCode === country) {
          const li = document.createElement("li");
          li.textContent = event.name;
          ul.appendChild(li);
        }
      });
      resultsContainer.appendChild(ul);
    }
  } catch (error) {
    console.error("Помилка під час виконання запиту:", error);
    document.getElementById("results").innerHTML = "Помилка під час виконання запиту";
  }
});


