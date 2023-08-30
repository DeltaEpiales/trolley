// scripts/timeline.js

document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
        const content = event.querySelector('.event-content');

        event.addEventListener('click', () => {
            content.classList.toggle('active');
        });
    });
});
