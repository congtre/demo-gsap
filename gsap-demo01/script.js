gsap.from('.mvisual__bg--left', {
    duration: 1,
    width: 0,
    ease: Expo.easeInOut
});

gsap.from('.mvisual__bg--right', {
    duration: 1,
    delay: 1,
    width: 0,
    opacity: 0,
    ease: Expo.easeInOut
});

gsap.from('.logo', {
    duration: 1,
    delay: 0.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

gsap.from('.menu', {
    duration: 1,
    delay: 0.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

gsap.from('.mvisual__image', {
    duration: 1,
    delay: 2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

gsap.from('.mvisual__info', {
    duration: 1,
    delay: 2.2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});