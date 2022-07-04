const menu = document.querySelector("ul");
const open = document.querySelector(".open");
const spans = document.querySelectorAll(".nav-container span");

console.log(spans);
let station = true;

spans.forEach((a, b) => {
  a.addEventListener("click", (e) => {
    if (!a.classList.contains("active") && a.innerText == "menu") {
      a.classList.add("active");
      spans[1].classList.remove("active");
      menu.classList.add("showmenu");
    } else if (!a.classList.contains("active") && a.innerText == "close") {
      a.classList.add("active");
      spans[0].classList.remove("active");
      menu.classList.remove("showmenu");
    }
  });
});
