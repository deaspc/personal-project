const tl6 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".container6",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "max", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
  },
});

tl6.fromTo(
  "#plastic6",
  {
    opacity: 1,
  },
  {
    y: 240,
    duration: 1,
  }
);
