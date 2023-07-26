const tl7 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".container7",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "max", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
  },
});

tl7.fromTo(
  "#black7",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#plastic7",
  {
    rotate: 45,
    opacity: 0,
  },
  {
    y: 80,
    rotate: -45,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl7.fromTo(
  "#plastic7",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#whale1",
  {
    y: 400,
    opacity: 1,
  },
  {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#text7-1",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl7.fromTo(
  "#text7-1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#text7-2",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#text7-2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#whale1",
  {
    opacity: 1,
  },
  {
    rotate: -60,
    opacity: 1,
    duration: 1,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#text7-3",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#text7-3",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);
