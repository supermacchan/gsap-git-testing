gsap.from('.heading', { duration: 1.5, y: '-250%', ease: 'bounce'})
gsap.fromTo('.navbar', { width: 0, x: "-100%" }, { duration: 1, delay: 1.5, x: 0, width: '100%' })
gsap.from('.index-link', { opacity: 0, duration: 1, delay: 2.5, stagger: 0.5 })