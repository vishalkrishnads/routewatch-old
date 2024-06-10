import { map } from './map.js'

function detectColorScheme() {
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const setTheme = (e) => {
        const newTheme = e.matches ? 'dark' : 'light';

        try {
            document.getElementById('logo').setAttribute('src', `/img/${newTheme}.jpg`);
        } catch(_) { }

        try {
            map.setStyle(`mapbox://styles/mapbox/${newTheme}-v11`);
        } catch(_) { }
    };

    setTheme(themeMediaQuery);

    themeMediaQuery.addEventListener('change', setTheme);
}

detectColorScheme();

// for manual theme toggle, not implemented
// const themeToggle = document.querySelector('#theme-toggle');
// themeToggle.addEventListener('click', () => {
//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     document.documentElement.setAttribute('data-theme', newTheme);
//     themeToggle.innerHTML = newTheme === 'light' ? 'dark_mode' : 'light_mode'
//     // remember to setup auto theme
//     // localStorage.setItem('theme', newTheme);
// });

export function toast(message = '', icon = 'error') {
    const status = document.getElementById('toast')
    const icons = { 
        'success': '<span class="material-icons">check_circle</span>',
        'error': '<span class="material-icons">error</span>',
        'warning': '<span class="material-icons">warning</span>',
        'working': '<span class="loader"></span>' 
    }

    const show = () => {
        status.classList.add('pop-up');
        status.style.display = 'flex';
    }

    const hide = () => {
        status.classList.add('pop-down');
        status.addEventListener('animationend', () => {
            status.style.display = 'none';
            status.classList.remove('pop-down');
        }, { once: true });
    }

    if(!message) {
        hide();
        return;
    }

    document.querySelector('#toast .icon').innerHTML = icons[icon];
    document.querySelector('#toast .text').innerHTML = `<p>${message}</p>`

    show();
}