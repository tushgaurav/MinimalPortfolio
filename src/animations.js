function animateHeading(element) {
  gsap.from(element, {
    opacity: 0,
    duration: 5,
  });
}

export default animateHeading;
