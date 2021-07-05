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
  $(".menu ul").addClass("mMuncul");
  $(".header").addClass("hMuncul");
  $(".header .hero img").addClass("iMuncul");
  $(".header .name").addClass("nMuncul");
  $(".header .status").addClass("sMuncul");
  $(".pKiri").addClass("pMuncul");
  $(".pTengah").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

// parallax Scroll
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // header
  $(".hero img").css({
    transform: "translate(0px, " + wScroll / 6 + "%)",
  });
  $(".name").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".status").css({
    transform: "translate(0px, " + wScroll / 1.7 + "%)",
  });
  $(".menu").css({
    transform: "translate(0px, " + wScroll / 20 + "%)",
  });

  // galery
  if (wScroll > $(".galery").offset().top - 400) {
    $(".galery .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".galery .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  } else {
    $(".galery .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".galery .thumbnail").eq(i).removeClass("muncul");
      }, 300 * (i + 1));
    });
  }
  if (wScroll > $(".project").offset().top - 500) {
    $(".project .projectss").each(function (i) {
      setTimeout(function () {
        $(".project .projectss").eq(i).addClass("pMuncul");
      }, 300 * (i + 1));
    });
  } else {
    $(".project .projectss").each(function (i) {
      setTimeout(function () {
        $(".project .projectss").eq(i).removeClass("pMuncul");
      }, 300 * (i + 1));
    });
  }
  if (wScroll > $(".contact").offset().top - 400) {
    $(".form").each(function (i) {
      setTimeout(function () {
        $(".form").eq(i).addClass("fMuncul");
      }, 100 * (i + 1));
    });
  } else {
    $(".form").each(function (i) {
      setTimeout(function () {
        $(".form").eq(i).removeClass("fMuncul");
      }, 100 * (i + 1));
    });
  }
  if (wScroll > $(".contact").offset().top - 400) {
    $(".form .formGroup").each(function (i) {
      setTimeout(function () {
        $(".form .formGroup").eq(i).addClass("fgMuncul");
      }, 200 * (i + 1));
    });
    $(".btn .btnKirim").addClass("bkMuncul");
    $(".btn .btnBatal").addClass("bbMuncul");
  } else {
    $(".form .formGroup").each(function (i) {
      setTimeout(function () {
        $(".form .formGroup").eq(i).removeClass("fgMuncul");
      }, 200 * (i + 1));
    });
    $(".btn .btnKirim").removeClass("bkMuncul");
    $(".btn .btnBatal").removeClass("bbMuncul");
  }
  if (wScroll > $(".footer").offset().top - 680) {
    $(".footer").each(function (i) {
      setTimeout(function () {
        $(".footer").eq(i).addClass("foMuncul");
      }, 300 * (i + 1));
    });
  } else {
    $(".footer").each(function (i) {
      setTimeout(function () {
        $(".footer").eq(i).removeClass("foMuncul");
      }, 300 * (i + 1));
    });
  }
});
