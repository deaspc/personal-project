const tl8 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".container8",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "max", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
    // onLeave: function () {
    //   window.scrollTo(0, 0);
    // },
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

tl8.fromTo(
  "#microplastic1",
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl8.fromTo(
  "#text8-1",
  {
    y: -10,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl8.fromTo(
  "#text8-1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl8.fromTo(
  "#text8-2",
  {
    y: -10,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);

tl8.fromTo(
  "#text8-2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);
tl8.fromTo(
  "#text8-3",
  {
    y: -10,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl8.fromTo(
  "#text8-3",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);
