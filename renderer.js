// Handle category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const resourceCards = document.querySelectorAll('.resource-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter resources
        const selectedCategory = button.dataset.category;
        
        resourceCards.forEach(card => {
            if (selectedCategory === 'all') {
                card.classList.remove('hidden');
            } else {
                const cardCategories = card.dataset.category.split(' ');
                if (cardCategories.includes(selectedCategory)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Handle external links
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('resource-link')) {
        event.preventDefault();
        const url = event.target.href;
        
        // Use Electron API to open in default browser
        if (window.electronAPI && window.electronAPI.openExternal) {
            window.electronAPI.openExternal(url);
        } else {
            // Fallback for development
            window.open(url, '_blank');
        }
    }
});

// Add smooth animations on load
window.addEventListener('load', () => {
    resourceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
});