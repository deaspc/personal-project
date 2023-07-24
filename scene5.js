const tl5 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".container5",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom bottom", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
  },
});

tl5.fromTo(
  "#black5-1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl5.fromTo(
  "#plastic5",
  {
    opacity: 0,
  },
  {
    y: 140,
    opacity: 1,
    duration: 3,
  }
);

tl5.fromTo(
  "#text5-1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl5.fromTo(
  "#text5-1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl5.fromTo(
  "#plastic5-1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 3,
  },
  "<+=0.5"
);

tl5.fromTo(
  "#plastic5",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  },
  "<+=0.5"
);

tl5.fromTo(
  "#text5-2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
  "<+=0.5"
);

tl5.fromTo(
  "#plastic5-1",
  {
    opacity: 1,
  },
  {
    rotate: 45,
    duration: 1,
  }
);

tl5.fromTo(
  "#plastic5-1",
  {
    opacity: 1,
  },
  {
    y: 200,
    opacity: 0,
    duration: 3,
  }
);

tl5.fromTo(
  "#text5-2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);
