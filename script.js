function showSession(id) {
  const session = document.getElementById(id);
  session.style.display = "block";
}

function getChuckQuote() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((json) => {
      document.querySelector("#norris_text").innerHTML = json.value;
    })
    .catch((err) => console.log(err));
}

let infoContainer = document.querySelector("#info-panel");
let infoBtn = document.querySelector("#info-btn");
let menuBtn = document.querySelector("#menu-btn");
let menuContainer = document.querySelector("#menu-panel");
let backgroundElements = document.querySelectorAll('[ class*="tui-bg-" ]');
let menuForm = document.querySelector("#menu-panel form");
let secretBtn = document.querySelector("#secret-button");
let secretTab = document.querySelector("#about .tui-tabs ul").children[2];
let submitContactForm = document.querySelector("#submit_form");
let cleanContactForm = document.querySelector("#clean_form");
let contactForm = document.querySelector("#contact-form");

window.onload = function () {
  getChuckQuote();
  setTimeout(function () {
    showSession("session-1");
  }, 300);
  setTimeout(function () {
    showSession("session-2");
  }, 400);
  setTimeout(function () {
    showSession("session-3");
  }, 450);
  setTimeout(function () {
    showSession("session-4");
  }, 870);
  setTimeout(function () {
    showSession("session-5");
  }, 1500);
  setTimeout(function () {
    document.querySelector("#start_screen").style.display = "none";
  }, 2500);
  infoBtn.addEventListener("click", () => {
    infoContainer.style.display = "flex";
    infoContainer.addEventListener(
      "click",
      () => (infoContainer.style.display = "none")
    );
  });
  menuBtn.addEventListener("click", () => {
    menuContainer.style.display = "flex";
    menuContainer.addEventListener(
      "click",
      () => (menuContainer.style.display = "none")
    );
  });
  menuForm.addEventListener("change", function (e) {
    backgroundElements.forEach(
      (element) => (element.className = `tui-bg-${event.target.value}-black`)
    );
  });
  secretBtn.addEventListener("click", () => {
    secretTab.classList.remove("disabled");
    secretTab.classList.add("yellow-255-text");
    secretTab.click();
    window.location.hash = "about";
  });
  submitContactForm.addEventListener("click", () => {
    let bool = true;
    document
      .querySelectorAll("#contact-form input, #contact-form textarea")
      .forEach((element) => {
        if (element.value === "") {
          bool = false;
          element.style.backgroundColor = "red";
        }
      });
    if (bool) {
      document.querySelector("#contact-form").submit();
    }
  });
  cleanContactForm.addEventListener("click", () => {
    document
      .querySelectorAll("#contact-form input, #contact-form textarea")
      .forEach((element) => {
        element.value = "";
      });
  });
};
