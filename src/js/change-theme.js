import darkMode from "../img/change-theme/dark_mode.svg";
import lightMode from "../img/change-theme/light_mode.svg";
const slider = document.querySelector('.slider')
const toggleLabel = document.querySelector('.toggle-label');
document.body.addEventListener('click', onToggleChange);

function onToggleChange(event) {
    if (event.target === toggleLabel) {
        const toggle = event.target.children.checkbox
        if (toggle.checked) {
            slider.style.backgroundImage = `url(${lightMode})`;
            document.body.classList.add('light-theme');
            toggle.checked = false;
        } else {
            slider.style.backgroundImage = `url(${darkMode})`;
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            toggle.checked = true;
            
        }
    }

}

