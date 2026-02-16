const elements = document.querySelectorAll('.fade-in');

elements.forEach((el, i) => {
    if (i % 2 === 0) {
        el.classList.add('left');
    } else {
        el.classList.add('right');
    }
});

function checkFade() {
    const trigger = window.innerHeight * 0.80;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
