const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to set theme based on localStorage or default
function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Check if there's a stored theme preference
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
}

// Apply the stored theme on initial load
setTheme();

// Event listener for toggling the theme
themeToggleBtn.addEventListener('click', () => {
    // Toggle the theme class on the body
    body.classList.toggle('light-theme');
    
    // Store the theme preference in localStorage
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
    }
});
