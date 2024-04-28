let string = document.querySelector("#string");
let finalpath = `M 10 150 Q 750 150 1490 150`;
let main = document.querySelector("body");

string.addEventListener("mousemove", function (eve) {
  let path = `M 10 150 Q ${eve.x} ${eve.y} 1490 150`;
  gsap.to("path", {
    attr: { d: path },
    duration: 0.5,
  });
  gsap.to("#cursor", {
    x: eve.clientX,
    y: eve.clientY,
    duration: 1,
    ease: "elastic.out(1,0.3)",
    borderBottomRightRadius: "70% 35%",
    borderBottomLeftRadius: "70% 35%",
    scale: 2,
  });
});
string.addEventListener("mouseleave", function (eve) {
  gsap.to("path", {
    attr: { d: finalpath },
    duration: 2.5,
    ease: "elastic.out(1,0.3)",
  });
  gsap.to("#cursor", {
    scale: 1,
  });
});
main.addEventListener("mousemove", function (event) {
  console.log(event);
  gsap.to("#cursor", {
    x: event.clientX,
    y: event.clientY,
    duration: 1,
    ease: "elastic.out(1,0.3)",
    borderRadius: "50%",
  });
});
