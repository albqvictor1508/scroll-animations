//CRIANDO ANIMAÇÕES NO SCROLL COM BIBLIOTECAS JS

//LOCOMOTIVE SCROLL E GSAP

(function escopo() {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector('.container');

    const scroller = new LocomotiveScroll({
        el: container,
        smooth: true,
    });

    scroller.addEventListeneer('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(container, {
        scrollTop(valor) {
            return arguments.length ? scroller.scrollTop(value, 0, 0) : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,

            }
        },

        pinType: container.style.transform ? 'transform' : 'fixed',
    })

    window.addEventListener('load', () => {
        let pinWrap = document.querySelector('.pin-wrap');
        let pinWrapWidth = pinWrap.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    
        gsap.to('.pin-wrap', {
            scrollTrigger: {
                scroller: container,
                scrub: true,
                trigger: "#sectionPin",
                pin: true,
                start: "top top",
                end: pinWrapWidth,
            },
                x: -horizontalScrollLength,
        })
    })
})();
