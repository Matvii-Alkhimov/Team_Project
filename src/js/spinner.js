import { Spinner } from "spin.js";

const loadContEl = document.querySelector(".spinner-container");

const params = {
    color: "white",
    lines: 10,
    animation: "spinner-line-fade-quick",
    speed: 1.3,
}

const spinner = new Spinner(params).spin(loadContEl);

window.addEventListener("load", () => {
    loadContEl.classList.remove("is-active")
    spinner.stop();
});
  