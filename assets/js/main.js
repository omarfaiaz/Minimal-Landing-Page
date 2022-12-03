$(document).ready(function () {
  // Animate From
  $(".hero").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".logo");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.from(targetElement, {
      scale: 3,
      y: "-50vh",
      duration: 1,
    });
  });

  // text Animation
  $(".header-text-move").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "-100% top",
        end: "30% top",
        scrub: 0.8,
      },
    });
    tl.to(targetElement, {
      y: "100%",
      duration: 1,
    });
  });

  //image animation
  $(".sticky-circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".sticky-circle-element");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      borderRadius: 0,
      width: "100vw",
      height: "100vh",
      duration: 1,
    });
  });

  //color  animation
  $(".sticky-circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      backgroundColor: "#e8e2da",
      color: "#2e2a27",
      duration: 1,
    });
  });

  //category section

  $(".categories").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      backgroundColor: "#e8e2da",
      color: "#2e2a27",
      duration: 1,
    });
  });

  // Grid Title Change
  $(".grid-list-item").eq(0).addClass("is--active");
  // Run a function
  $(".grid_wrapper").each(function (index) {
    let triggerElement = $(this);
    let myIndex = $(this).index();
    console.log(myIndex);

    let targetElement = $(".grid-list-item").eq(myIndex);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          $(".grid-list-item").removeClass("is--active");
          targetElement.addClass("is--active");
        },
        onEnterBack: () => {
          $(".grid-list-item").removeClass("is--active");
          targetElement.addClass("is--active");
        },
      },
    });
  });

  //bg color change

  $(".grid_wrapper:nth-child(odd)").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      backgroundColor: "#e8e2da",
      color: "#2e2a27",
      duration: 1,
    });
  });

  $(".grid_wrapper:nth-child(even)").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      backgroundColor: "#2e2a27",
      color: "#fff",
      duration: 1,
    });
  });
});
