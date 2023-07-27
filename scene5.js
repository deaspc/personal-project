const tl5 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container5",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
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
  "#microplastic5",
  {
    y: 10,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
  "<+=0.2"
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

tl5.fromTo(
  "#microplastic5",
  {
    y: 0,
    opacity: 1,
  },
  {
    y: -100,
    opacity: 0,
    duration: 1,
  }
);
