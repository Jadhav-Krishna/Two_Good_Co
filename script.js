function locomotive_animation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    multiplier: 0.5,
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotive_animation();

function navbar() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #atags", {
    transform: "translateY(-100%)",
    opacity: "0",
    duration: 1,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navbar();

function video_hover_Animation() {
  var videodiv = document.querySelector("#video-div");
  var play = document.querySelector("#play");

  videodiv.addEventListener("mousemove", function (elem) {
    gsap.to(play, {
      scale: 1,
      opacity: 1,
      left: elem.x,
      top: elem.y,
    });
  });
  videodiv.addEventListener("mouseleave", function () {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
    });
  });
}
video_hover_Animation();

function loader_animation() {
  gsap.from("#page1 h1", {
    y: 40,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.25,
  });
  gsap.from("#page1 #video-div", {
    y: 100,
    duration: 1,
    delay: 1,
    opacity: 0,
  });
}
loader_animation();

gsap.from("#page2 .pic", {
  y: 40,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 1,
});

function cursor_animation() {
  document.addEventListener("mousemove", function (elem) {
    gsap.to("#cursor", {
      left: elem.x,
      top: elem.y,
    });
  });
  document
    .querySelector("#product1")
    .addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
  document
    .querySelector("#product1")
    .addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  document
    .querySelector("#product2")
    .addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
  document
    .querySelector("#product2")
    .addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  document
    .querySelector("#product3")
    .addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
  document
    .querySelector("#product3")
    .addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  document
    .querySelector("#product4")
    .addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
  document
    .querySelector("#product4")
    .addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
}
cursor_animation();
