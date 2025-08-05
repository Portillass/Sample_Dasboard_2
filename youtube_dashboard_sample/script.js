// Simple interactivity for sidebar (optional)
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});

// Example: Search bar functionality (optional)
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    alert('You searched for: ' + query);
});
