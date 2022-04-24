/* 게시판 */

function boardToggle() {
  const boardTitle = document.querySelectorAll(".boardTitle");

  boardTitle.forEach((item) => {
    const boardContent = item.closest("tr").nextElementSibling;

    item.addEventListener("click", function () {
      boardContent.classList.toggle("active");
      item.classList.toggle("active");
    });
  });
}

boardToggle();
