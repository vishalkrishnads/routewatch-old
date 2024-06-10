function detectColorScheme() {
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const setTheme = (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.getElementById('logo').setAttribute('src', `/img/${newTheme}.jpg`);
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
