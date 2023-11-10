import darkMode from "../img/change-theme/dark_mode.svg"
import lightMode from "../img/change-theme/light_mode.svg"

const themeToggle = document.getElementById('theme-toggle');
const icon = document.querySelector('.icon');

themeToggle.addEventListener('change', onToggleChange);

function onToggleChange() {
    if (themeToggle.checked) {
        icon.style.backgroundImage = `url(${darkMode})`;
        document.body.style.backgroundColor = 'red';
    } else {
        icon.style.backgroundImage = `url(${lightMode})`;
    }
}

