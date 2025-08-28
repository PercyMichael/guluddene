// Hamburger Menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Herbal Medicine Database Search
const herbSearch = document.getElementById('search-herbs');
if (herbSearch) {
    fetch('herbal_database.json')
        .then(response => response.json())
        .then(data => {
            herbSearch.addEventListener('input', () => {
                const query = herbSearch.value.toLowerCase();
                const results = data.filter(herb => herb.name.toLowerCase().includes(query));
                document.getElementById('herb-results').innerHTML = results
                    .map(herb => `<p><strong>${herb.name}</strong>: ${herb.use}</p>`)
                    .join('');
            });
        });
}

// Form Submission Alerts (Placeholder)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (Backend required for full functionality)');
    });
});

// Multilingual Support (Basic Example)
function switchLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    // Add logic to fetch translated content (requires backend or static files)
}