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

tl6.fromTo(
  "#turtle1",
  {
    y: -60,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);

tl6.fromTo(
  "#turtle2",
  {
    x: -60,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl6.fromTo(
  "#text6",
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

tl6.fromTo(
  "#text6",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl6.fromTo(
  "#text6-1",
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

tl6.fromTo(
  "#text6-1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl6.fromTo(
  "#turtle1",
  {
    y: 0,
  },
  {
    y: -30,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl6.fromTo(
  "#turtle2",
  {
    x: 0,
  },
  {
    x: -20,
    duration: 1,
  },
  "<+=0.2"
);

tl6.fromTo(
  "#text6-2",
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

tl6.fromTo(
  "#text6-2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl6.fromTo(
  "#text6-3",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 1,
  }
);

tl6.fromTo(
  "#turtle1",
  {
    opacity: 1,
  },
  {
    rotate: 45,
    y: 100,
    opacity: 0,
    duration: 1,
  },
  "<+=0.2"
);

tl6.fromTo(
  "#turtle2",
  {
    opacity: 1,
  },
  {
    rotate: -45,
    y: 100,
    opacity: 0,
    duration: 1,
  },
  "<+=0.2"
);

tl6.fromTo(
  "#text6-3",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  },
  "<+=0.2"
);

tl6.fromTo(
  "#black6-1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
);

tl6.fromTo(
  "#plastic6",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  },
  "<+="
);

tl6.fromTo(
  "#black6-1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl6.fromTo(
  "#bg6-1",
  {
    opacity: 0,
    x: -300,
  },
  {
    x: 0,
    opacity: 1,
    duration: 3,
  }
);

tl6.fromTo(
  "#bg6-2",
  {
    opacity: 0,
    y: 300,
  },
  {
    y: 0,
    opacity: 1,
    duration: 3,
  }
);
