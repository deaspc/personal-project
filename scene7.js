const tl7 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container7",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
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
  "#microplastic7",
  {
    y: 5,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#plastic7, #microplastic7",
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
    opacity: 0,
  },
  {
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

tl7.fromTo(
  "#whale1",
  {
    y: 0,
  },
  {
    y: -100,
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#black7",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

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
  "#sand",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#whale1",
  {
    y: 200,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#text7-4",
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
  "#text7-4",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.to("#whale1", {
  y: -50,
  ease: "bounce.out",
  duration: 2.5,
  repeat: 1,
});

tl7.fromTo(
  "#whale1",
  {
    opacity: 1,
  },
  {
    scaleX: 1.25,
    scaleY: 1.25,
    rotate: -60,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#whale1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#bomb",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scaleX: 1.25,
    scaleY: 1.25,
    duration: 1,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#black7",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#text7-5",
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
  "#text7-5",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#bomb",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  },
  "<+=0.4"
);

tl7.fromTo(
  "#sky",
  {
    y: 300,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#carbon",
  {
    y: 300,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#text7-6",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl7.fromTo(
  "#text7-6",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl7.fromTo(
  "#black7",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);
