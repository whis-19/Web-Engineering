document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            themeToggle.textContent = '☀️'; // Sun icon for light mode
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            themeToggle.textContent = '🌙'; // Moon icon for dark mode
            localStorage.setItem('theme', 'dark');
        }
    });
});