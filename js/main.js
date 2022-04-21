/* 스크롤 시 애니메이션 효과 */
const sections = document.querySelectorAll("section");
const homeBtn = document.querySelector(".homeBtn");
const identity = document.getElementById("identity");
const identityBox = identity.querySelectorAll("article");

let posArr = [];
const sectionEffectPos = -1000;

for (let section of sections) {
  let pos = section.offsetTop;
  posArr.push(pos);
}

window.addEventListener("scroll", (e) => {
  let scroll = window.scrollY || window.pageYOffset;

  sections.forEach((el, index) => {
    if (scroll >= posArr[index] + sectionEffectPos) {
      // for (let i = 0; i < sections.length; i++) {
      //   sections[i].classList.remove("on");
      // }
      sections[index].classList.add("on");
    }
  });
  scroll > posArr[2] + sectionEffectPos
    ? identityBox[0].classList.add("on")
    : null;
  scroll > posArr[2] + sectionEffectPos + 700
    ? identityBox[1].classList.add("on")
    : null;
  scroll > posArr[1] + sectionEffectPos
    ? homeBtn.classList.add("on")
    : homeBtn.classList.remove("on");
});

homeBtn.addEventListener("click", () => {
  new Anime(window, {
    prop: "scroll",
    value: 0,
    duration: 500,
  });
});

/* 마우스 반전 효과 */
const body = document.querySelector("body");
const circle = document.querySelector(".mousePointer");

body.addEventListener("mousemove", (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  circle.style.left = mouseX + "px";
  circle.style.top = mouseY + "px";
});

/* Swiper */

var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

let slides = document.querySelectorAll(".swiper-slide");
for (let slide of slides) {
  slide.addEventListener("mouseover", () => {
    productSwiper.autoplay.stop();
  });
  slide.addEventListener("mouseout", () => {
    productSwiper.autoplay.start();
  });
}

var policySwiper = new Swiper(".policySwiper", {
  effect: "fade",
  loop: false,
  speed: 1000,
  navigation: {
    nextEl: ".policySwiper-button-next",
    prevEl: ".policySwiper-button-prev",
  },
  fadeEffect: {
    crossFade: true,
  },
});

policySwiper.autoplay.stop();
