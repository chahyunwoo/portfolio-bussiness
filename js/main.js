/* 햄버거 버튼 */
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

btnCall.addEventListener("click", function (e) {
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
});

function boardToggle() {
  const boardTitle = document.querySelectorAll(".boardTitle");
  
  boardTitle.forEach((item) => {
    const boardContent = item.closest("tr").nextElementSibling;

    item.addEventListener("click", function () {
      boardContent.classList.toggle("active");
      item.classList.toggle('active');
    });
  });
}

boardToggle();

/* 스크롤 시 애니메이션 효과 */
const sections = document.querySelectorAll("section");
const homeBtn = document.querySelector(".homeBtn");

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
      sections[index].classList.add("on");
    }
  });
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
    350: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
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
