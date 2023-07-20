const tl5 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".container5",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "max", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
  },
});

tl5.fromTo(
  "#plastic5",
  {
    opacity: 0,
  },
  {
    y: 50,
    opacity: 1,
    duration: 3,
  }
);

tl5.fromTo(
  "#plastic5",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl5.fromTo(
  "#plastic5-1",
  {
    opacity: 0,
  },
  {
    y: 50,
    opacity: 1,
    duration: 3,
  }
);
