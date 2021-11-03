ScrollReveal().reveal('.scroll--move-up', {
    origin: 'top',
    distance: '-50px',
    delay: 200,
    interval: 500,
    duration: 1500
});

ScrollReveal().reveal('.scroll--move-left', {
    origin: 'left',
    distance: '-100px',
    duration: 2000
});

ScrollReveal().reveal('.scroll--move-right', {
    origin: 'right',
    distance: '-100px',
    duration: 2000
});

ScrollReveal().reveal('.scroll--move-scale', {
    scale: 0.5,
    duration: 2000
});

ScrollReveal().reveal('.scroll--move-rotate', {
    rotate: {
        z: -25
    },
    duration: 2000
});