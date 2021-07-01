const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
nav.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const scriptURL = "https://script.google.com/macros/s/AKfycbyUV8VNjAj4gYOIcOW4PUyg-qL3P5vzsw1l9GlVXSVvU2XQHwhwZMFsPjdzBwOKmzCT/exec";
const form = document.forms["my-portfolio-form"];
const btnKirim = document.querySelector(".btn-kirim");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      myAlert.classList.toggle("warning");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
