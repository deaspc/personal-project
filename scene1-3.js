// scene1
const tl1 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container1",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl1.fromTo(
  "#plastic1",
  {
    duration: 1,
  },
  {
    y: 220,
    opacity: 0,
    duration: 3,
  }
);

// scene2
const tl2 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container2",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom bottom", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
  },
});

tl2.fromTo(
  "#text2-1",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  },
  "<+=0.2"
);

tl2.fromTo(
  "#text2-1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl2.fromTo(
  "#text2-2",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 1,
  }
);

tl2.fromTo(
  "#text2-2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl2.fromTo(
  "#plastic2",
  {
    opacity: 0,
  },
  {
    y: 400,
    opacity: 1,
    duration: 3,
    rotate: 60,
  }
);

tl2.fromTo(
  "#text2-3",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  }
);

tl2.fromTo(
  "#text2-3",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl2.fromTo(
  "#text2-4",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  }
);

tl2.fromTo(
  "#text2-4",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl2.fromTo(
  "#text2-5",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  }
);

tl2.fromTo(
  "#text2-5",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl2.fromTo(
  "#text2-6, #icon2",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  }
);

tl2.fromTo(
  "#text2-6, #icon2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

// scene3
const tl3 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container3",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom bottom", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pinSpacing: false,
  },
});

tl3.fromTo(
  "#text3",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  }
);

tl3.fromTo(
  "#plastic3",
  {
    opacity: 0,
  },
  {
    y: 300,
    opacity: 1,
    duration: 5,
    rotate: 25,
  },
  "<=+0.5"
);

tl3.fromTo(
  "#microplastic1",
  {
    opacity: 0,
  },
  {
    y: -40,
    opacity: 1,
    duration: 3,
  },
  "<=+0.5"
);

tl3.fromTo(
  "#text3",
  {
    opacity: 1,
  },
  {
    y: -10,
    opacity: 0,
    duration: 1,
  }
);

tl3.fromTo(
  "#plankton1",
  {
    opacity: 0,
  },
  {
    y: -40,
    opacity: 1,
    duration: 1,
  }
);

tl3.fromTo(
  "#text3-1",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  },
  "<=+0.5"
);
