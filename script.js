const elements = document.querySelectorAll('#nav-prt2 > *');

var tl = gsap.timeline();

tl.from("#nav h1", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
}, "an")

tl.from("#nav>i", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
}, "an")

tl.from(elements, {
    duration: 2,
    y: 100, 
    opacity: 0,
    ease: "power3.out", 
    stagger: {
        each: 0.05, 
        from: "center", 
    }
}, "an");

tl.from("#left>*", {
    duration: 2,
    x: -100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.1,
}, "an")

tl.from("#right>*", {
    duration: 2,
    x: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.1,
}, "an")

tl.from("#center>*", {
    duration: 2,
    y: -50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
}, "an")
