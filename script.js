function PageAnimation() {
    const elements = document.querySelectorAll('#nav-prt2 > *');

    var tl = gsap.timeline();

    tl.from("#nav h1", {
        // delay: 0.5,
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
}

window.onload = () => {
    var tl2 = gsap.timeline();

    tl2.from("#CC", {
        duration: 1,
        y: 500,
        opacity: 0,
        ease: "power3.out",
        onComplete: () => {
            tl2.to("#CC", {
                duration: 1,
                y: -500,
                opacity: 0,
                ease: "power3.inOut",
                onComplete: () => {
                    document.querySelector("#preloader").style.display = "none";
                    document.querySelector("#main").style.display = "block";
                    PageAnimation();
                }
            })
        }
    })
}
