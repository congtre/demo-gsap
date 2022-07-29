let tl = gsap.timeline({ delay: 1 });
tl.from('header', { duration: 0.6, ease: 'power2. out', y: -60 });
tl.from('.hero-content', {
    duration: 0.6,
    ease: 'power2. out',
    opacity: 0,
    y: -40,
});
tl.from('.illustration', { duration: 0.6, ease: 'power2. out', opacity: 0 });

gsap.to('#red-car', {
    duration: 8,
    x: 1960,
    y: 439,
    ease: 'none',
    repeat: -1,
    repeatDelay: 2,
});

gsap.to('#blue-car', {
    duration: 16,
    x: 572,
    y: 210,
    ease: 'none',
    repeat: -1,
    repeatDelay: 1,
});

gsap.to('#yellow-car', {
    duration: 7,
    x: 884,
    y: 1114,
    ease: 'none',
    repeat: -1,
    repeatDelay: 1,
});
