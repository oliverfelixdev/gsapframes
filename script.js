function main() {
  let animateAnchs = document.querySelectorAll(".navLinks");
  let animateHeadings = document.querySelectorAll("h1");
  let animateImg = document.querySelector(".modelImage");

  let tl = gsap.timeline();

  tl.from(animateAnchs, {
    y: -50,
    opacity: 0,
    delay: 0.3,
    duration: 0.4,
    stagger: 0.1,
  });

  tl.from(animateHeadings, {
    x: -100,
    opacity: 0,
    delay: 0.3,
    duration: 0.4,
    stagger: 0.2,
  });

  tl.from(animateImg, {
    opacity: 0,
    scale: 0.9,
  });
} main()