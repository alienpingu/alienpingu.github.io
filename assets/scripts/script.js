AOS.init();
// Menu Buttons
let open_menu = document.querySelector("#open_menu");
let close_menu = document.querySelector("#close_menu");
let menu_DOM = document.querySelector("#menu");
let navbar_DOM = document.querySelector("#navbar");
let menu_links = document.querySelectorAll("#menu_link a");
let show_work = document.querySelector("#more_work_btn");
let hidden_work = document.querySelectorAll("#works .row .col.d-none");

open_menu.addEventListener("click", () => {
  navbar_DOM.classList.add("scale-out-center");
  menu_DOM.style.display = "flex";
  navbar_DOM.style.display = "none";
});

close_menu.addEventListener("click", () => {
  menu_DOM.style.display = "none";
  navbar_DOM.style.display = "flex";
});

menu_links.forEach((el) =>
  el.addEventListener("click", () => {
    menu_DOM.style.display = "none";
    navbar_DOM.style.display = "flex";
  })
);

show_work.addEventListener("click", () => {
  hidden_work.forEach((item) =>
    item.classList.contains("d-none")
      ? item.classList.remove("d-none")
      : item.classList.add("d-none")
  );
  document.querySelectorAll("#works .row .col.d-none").length > 0
    ? (show_work.innerHTML = "Show more")
    : (show_work.innerHTML = "Show less");
});
