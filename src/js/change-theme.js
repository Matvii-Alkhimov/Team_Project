import darkMode from "../img/change-theme/dark_mode.svg";
import lightMode from "../img/change-theme/light_mode.svg";

const themeToggle = document.querySelector('.theme-toggle');
const icon = document.querySelector('.toggle-label');
console.log(icon);

// class ThemeChanger {
//     constructor(darkMode, lightMode) {
//         this.icon = icon;
//         this.darkMode = darkMode;
//         this.lightMode = lightMode;
//         this.themeToggle = themeToggle;
//         this.themeToggle.addEventListener('change', onToggleChange);
//     }

//     onToggleChange() {
//         if (this.themeToggle.checked) {
//             this.icon.style.backgroundImage = `url(${lightMode})`;
//             document.body.style.backgroundColor = 'white';
//         } else {
//             this.icon.style.backgroundImage = `url(${darkMode})`;
//         }
//     }
// }
themeToggle.addEventListener('change', onToggleChange);

function onToggleChange(event) {
    console.log(event.target);
    if (icon) {
        if (themeToggle.checked) {
            icon.style.backgroundImage = `url(${lightMode})`;
            document.body.classList.add('light-theme')
        } else {
            icon.style.backgroundImage = `url(${darkMode})`;
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme')
        }
    }
    
    console.log(themeToggle.checked);

}

