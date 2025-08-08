const userPages = {
  //"nautanki": "pages/nautanki.html",
//   "amuuuu": "pages/amuuuu.html",
//   "ex-mumbaikar": "pages/ex-mumbaikar.html",
//   "gta-v": "pages/gta-v.html",
  "kajo_katli": "pages/kajokatli.html",
  "@vikuuuu": "pages/vikuuuu.html",
  "@trijuuu": "pages/trijuuu.html",
//   "@summer_cutie": "pages/summer_cutie.html",
  "ruv_rocks": "pages/ruv_rocks.html"
};

function redirectUser() {
  const input = document.getElementById("username").value.trim().toLowerCase();

  if (userPages[input]) {
    window.location.href = userPages[input];
  } else {
    alert("Who dis? New cousin? Can’t fool me, I know my circus monkeys 🐒");
  }
}

