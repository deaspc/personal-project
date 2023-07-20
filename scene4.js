// scene 4
const tl4 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".container4",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl4.fromTo(
  "#microplastic2",
  {
    opacity: 0,
    y: -50,
  },
  {
    y: 0,
    opacity: 1,
    duration: 3,
  }
);

tl4.fromTo(
  "#plankton2",
  {
    opacity: 0,
    y: 40,
  },
  {
    y: 0,
    opacity: 1,
    duration: 3,
  },
  "<+=0.5"
);

tl4.fromTo(
  "#text4",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 1,
  },
  "<+=1"
);

tl4.fromTo(
  "#tuna1",
  {
    opacity: 0,
    x: -100,
  },
  {
    x: -50,
    opacity: 1,
    duration: 1,
  },
  "<+=1"
);

tl4.fromTo(
  "#text4",
  {
    opacity: 1,
  },
  {
    y: -10,
    opacity: 0,
    duration: 1,
  }
);

tl4.fromTo(
  "#tuna1",
  {
    x: -20,
  },
  {
    x: 80,
    duration: 3,
  }
);

tl4.fromTo(
  "#text4-1",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 1,
  },
  "<+=1"
);

tl4.fromTo(
  "#microplastic2",
  {
    opacity: 1,
  },
  {
    y: 40,
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#plankton2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 3,
  },
  "<+=0.5"
);

tl4.fromTo(
  "#bg1",
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

tl4.fromTo(
  "#tuna2",
  {
    opacity: 0,
    x: -20,
  },
  {
    opacity: 1,
    x: 80,
    duration: 3,
  }
);

tl4.fromTo(
  "#text4-2",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  },
  "<+=1"
);

tl4.fromTo(
  "#text4-2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#text4-3",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  }
);

tl4.fromTo(
  "#bg2",
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

tl4.fromTo(
  "#tunasteak",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl4.fromTo(
  "#text4-5",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  },
  "<+=1"
);

tl4.fromTo(
  "#text4-5",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 3,
  }
);

tl4.fromTo(
  "#text4-6",
  {
    opacity: 0,
  },
  {
    y: -10,
    opacity: 1,
    duration: 3,
  }
);
