/* 모바일 모달 */

const btnView = document.querySelectorAll(".btnView");
const modal = document.querySelector(".membersMoModal");
const btnClose = document.querySelector(".modalClose");

const modalH3 = document.querySelectorAll(".member .desc h3");
const modalP = document.querySelectorAll(".member .desc p");

const modalTitle = modal.querySelector(".modalBox h1");
const modalContents = modal.querySelector(".modalBox p");

btnView.forEach((item) => {
  item.addEventListener("click", function () {
    modal.classList.add("on");
  });
});

for (let i = 0; i < btnView.length; i++) {
  btnView[i].addEventListener("click", function () {
    let h3Cont = modalH3[i].innerText;
    let pCont = modalP[i].innerText;

    modalTitle.innerText = h3Cont;
    modalContents.innerText = pCont;
  });
}

btnClose.addEventListener("click", function () {
  modal.classList.remove("on");
});
