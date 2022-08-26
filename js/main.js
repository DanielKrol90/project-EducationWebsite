// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = document.querySelector('.faq-icon i');
        if (icon.className === "bi bi-plus-circle") {
            icon.className = "bi bi-dash-circle"
        } else {
            icon.className = "bi bi-plus-circle"
        }
    })
})