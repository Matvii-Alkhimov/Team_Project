const per_page_max = 29;
let current_page = 1;
const btns = document.querySelector('.pagination');

function appendBtn(i, ellipsis) {
	const activeBtn = current_page === i;
	const button = document.createElement('button');
	button.classList.add('btn-pagination');
	if (ellipsis === true) {
		button.innerHTML = '...';
		button.disabled = true;
		btns.append(button);
		return false;
	}
	if (activeBtn) {
		button.classList.add('active');
	}
	button.disabled = activeBtn;
	button.innerHTML = i;
	button.addEventListener('click', () => {
		current_page = i;
		btns.innerHTML = '';
		logic();
	});
	btns.append(button);
}

logic();

function logic() {

	appendBtn(1);
	appendBtn(2);

	if (current_page < 5) {
		appendBtn(3);
		appendBtn(4);
		appendBtn(5);

		appendBtn(current_page, true);
	} else if (current_page <= per_page_max - 5) {
		appendBtn(current_page, true);
		// appendBtn(current_page - 2);
		appendBtn(current_page - 1);
		appendBtn(current_page);
		appendBtn(current_page + 1);
		// appendBtn(current_page + 2);
		appendBtn(current_page, true);
	} else {
		appendBtn(current_page, true);
		appendBtn(per_page_max - 6);
		appendBtn(per_page_max - 5);
		appendBtn(per_page_max - 4);
		appendBtn(per_page_max - 3);
		appendBtn(per_page_max - 2);
	}

	appendBtn(per_page_max - 1);
	appendBtn(per_page_max);

}

import cardsTemplate from "../cards-render.handlebars"
const cardsUl = document.querySelector('.cards-list')
btns.addEventListener('click', paginateCards)

function paginateCards(event) {
	const elementNumber = event.target.textContent
	console.log(elementNumber);
	fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&page=${elementNumber}&apikey=G54BzBe6OKEVYrbTC4hVXGtHDspAOWwv`)
		.then(res => res.json())
		.then(data => data._embedded.events)
		.then(events => {
			cardsUl.innerHTML = "";
			const markup = cardsTemplate(events)
			cardsUl.innerHTML = markup
		})
}