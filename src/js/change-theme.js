const themeToggle = document.getElementById('theme-toggle');
const icon = document.querySelector('.icon');

themeToggle.addEventListener('change', onToggleChange);

function onToggleChange() {
    if (themeToggle.checked) {
        icon.style.backgroundImage = 'url(/src/change-theme/dark_mode.svg)';
    } else {
        icon.style.backgroundImage = 'url(/src/change-theme/light_mode.svg)';
    }
}

