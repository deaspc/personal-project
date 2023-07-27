const tl8 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container8",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
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
  "#microplastic8-1",
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
  "#microplastic8-2",
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
  "#microplastic8-3",
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

tl8.fromTo(
  "#text8-4",
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
  "#text8-4",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl8.fromTo(
  "#microplastic8-1, #microplastic8-2, #microplastic8-3",
  {
    opacity: 1,
  },
  {
    y: -100,
    opacity: 0,
    duration: 1,
  }
);

tl8.fromTo(
  "#text8-5",
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
  "#bgs6",
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

tl8.fromTo(
  "#microplastic8-1, #microplastic8-2, #microplastic8-3",
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

tl8.fromTo(
  "#text8-5",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl8.fromTo(
  "#text8-6",
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
  "#text8-6",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl8.fromTo(
  "#bgs4",
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

tl8.fromTo(
  "#bgs3",
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

tl8.fromTo(
  "#microplastic8-1, #microplastic8-2, #microplastic8-3",
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

tl8.fromTo(
  "#text8-7",
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
  "#text8-7",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);

tl8.fromTo(
  "#text8-8",
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
  "#text8-8",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 1,
  }
);
