// Mobile Navbar Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Event Filtering System
const filterButtons = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        eventCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Category Cards shortcut filter trigger
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        
        // Scroll to events section
        document.getElementById('events').scrollIntoView({ behavior: 'smooth' });

        // Trigger corresponding filter button
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === cat) {
                btn.click();
            }
        });
    });
});

// Registration Modal Handling
const regModal = document.getElementById('regModal');
const closeModal = document.getElementById('closeModal');
const modalOkBtn = document.getElementById('modalOkBtn');
const modalMessage = document.getElementById('modalMessage');

function registerEvent(eventName) {
    modalMessage.textContent = `You have successfully secured your spot for "${eventName}". Check your student email for ticket details.`;
    regModal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    regModal.style.display = 'none';
});

modalOkBtn.addEventListener('click', () => {
    regModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === regModal) {
        regModal.style.display = 'none';
    }
});