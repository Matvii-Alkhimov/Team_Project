import darkMode from "../img/change-theme/dark_mode.svg";
import lightMode from "../img/change-theme/light_mode.svg";
const slider = document.querySelector('.slider')
const toggleLabel = document.querySelector('.toggle-label');
const toggle = document.querySelector('.toggle');

// console.log(toggleLabel);

// class ThemeChanger {
//     constructor(darkMode, lightMode) {
//         this.toggleLabel = toggleLabel;
//         this.darkMode = darkMode;
//         this.lightMode = lightMode;
//         this.toggle = toggle;
//         this.toggle.addEventListener('change', onToggleChange);
//     }

//     onToggleChange() {
//         if (this.toggle.checked) {
//             this.toggleLabel.style.backgroundImage = `url(${lightMode})`;
//             document.body.style.backgroundColor = 'white';
//         } else {
//             this.toggleLabel.style.backgroundImage = `url(${darkMode})`;
//         }
//     }
// }
document.body.addEventListener('click', onToggleChange);

function onToggleChange(event) {
    console.log(event.target);
    // if (toggleLabel) {
        if (toggle.checked) {
            slider.style.backgroundImage = `url(${lightMode})`;
            document.body.classList.add('light-theme')
        } else {
            slider.style.backgroundImage = `url(${darkMode})`;
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            toggle.checked = false;
        }
    // }
    
    console.log(toggle.checked);

}

