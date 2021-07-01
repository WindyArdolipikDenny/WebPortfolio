// navbar
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
nav.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
// contact
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
// parallax load(dibuka/direfresh)
// Abaout
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pTengah").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

// parallax Scroll
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // header
  $(".hero img").css({
    transform: "translate(0px, " + wScroll / 10 + "%)",
  });
  $(".name").css({
    transform: "translate(0px, " + wScroll / 18 + "%)",
  });
  $(".status").css({
    transform: "translate(0px, " + wScroll / 20 + "%)",
  });
  $(".menu").css({
    transform: "translate(0px, " + wScroll / 20 + "%)",
  });

  // galery
  if (wScroll > $(".galery").offset().top - 200) {
    $(".galery .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".galery .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
