// Navbar

    $(".navbar-toggler").click(function(){
        $("#mainNavigation").toggleClass("active");
    });

// Animate Aos

    AOS.init({
        duration: 1200,
    });

// Scroll Animation

    const lenis = new Lenis()

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
