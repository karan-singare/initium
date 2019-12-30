window.sr = ScrollReveal({
  distance: "3rem",
  duration: 1000,
  easing: "ease",
  scale: .5,
  mobile: true,
  reset: true,
  viewFactor: 0.4,
});

// sr.reveal('.btn', {
//   origin: "bottom",
//   distance: "20px",
//   duration: 500,
//   rotate: {x: 0, y: 0, z: 0},
//   opacity: 0,
//   scale: 1,
//   easing: "cubic-bezier(0.6, 0.2, 0.1, 1 )",
//   mobile: true,
//   reset: false,
//   viewFactor: 0.2,
// });
sr.reveal('.btn, .heading__primary', {
  origin: "bottom",
});
sr.reveal('.testimonials:nth-child(odd)', {
  origin: "left",
});
sr.reveal('.testimonials:nth-child(even)', {
  origin: "right",
});
