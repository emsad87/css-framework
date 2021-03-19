let mainNav = document.querySelector("#js-menu");
let navBarToggle = document.querySelector("#js-navbar-toggle");

let codebox = document.querySelectorAll(".code");

navBarToggle.innerHTML = `
  <span></span>
                <span></span>
                <span></span>`;

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

codebox.forEach((element) => {
  element.style.height = "1px";
  element.style.height = element.scrollHeight + "px";
  element.readOnly = true;
});
