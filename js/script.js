const b1 = "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";

const b2 = "linear-gradient(17deg, rgba(255,0,0,.7), rgba(255,0,0,0) 70.71%), linear-gradient(200deg, rgba(0, 255, 0, .9), rgba(0,255,0,.2) 70.71%),  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0.1) 70.71%)";

const gradient = document.getElementById("gradient")

gsap.fromTo(gradient,
  {background: b1},
  {ease: "none", duration: 6, background: b2, repeat: -1, yoyo: true}
);

const timeline = gsap.timeline({ defaults: { duration: 1 }});

timeline
  .from('.top', { y: '-100%', ease: "sine.in" })
  .from('.bottom', { y: '100%', ease: "sine.in" }, '<0')
  .from('.link', { opacity: 0, stagger: 0.5 })
  .from('.right', { x: '-100vw', ease: 'power2.in'}, 1)
  .from('.left', { x: '-100%' }, '<.5')
  .from('.grad', { opacity: 0 }, 2)
  .fromTo('.button', { opacity: 0 }, { duration: 0.5, opacity: 1, ease: "power1.in"}, '<.5')

  const button = document.querySelector('.button');

  button.addEventListener('click', () => {
    timeline.timeScale(2)
    timeline.reverse()
  })