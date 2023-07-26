const tl8 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".container8",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom bottom", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
    onLeave: function () {
      window.scrollTo(0, 0);
    },
  },
});

tl8.fromTo(
  "#black8",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);
