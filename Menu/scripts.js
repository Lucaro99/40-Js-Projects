const icon1 = document.getElementById("icon-1");
const icon2 = document.getElementById("icon-2");
const icon3 = document.getElementById("icon-3");
document.getElementById("btn-open-1").addEventListener("click", () => {
  if (icon1.classList.contains("fa-plus")) {
    document.getElementById("answer-1").classList.add("show-answer");
    document.getElementById("answer-2").classList.remove("show-answer");
    document.getElementById("answer-3").classList.remove("show-answer");
    icon1.classList.remove("fa-plus");
    icon1.classList.add("fa-minus");
    icon2.classList.remove("fa-minus");
    icon2.classList.add("fa-plus");
    icon3.classList.remove("fa-minus");
    icon3.classList.add("fa-plus");
  } else {
    icon1.classList.remove("fa-minus");
    icon1.classList.add("fa-plus");
    document.getElementById("answer-1").classList.remove("show-answer");
  }
});
document.getElementById("btn-open-2").addEventListener("click", () => {
  if (icon2.classList.contains("fa-plus")) {
    document.getElementById("answer-2").classList.add("show-answer");
    document.getElementById("answer-1").classList.remove("show-answer");
    document.getElementById("answer-3").classList.remove("show-answer");
    icon2.classList.remove("fa-plus");
    icon2.classList.add("fa-minus");
    icon1.classList.remove("fa-minus");
    icon1.classList.add("fa-plus");
    icon3.classList.remove("fa-minus");
    icon3.classList.add("fa-plus");
  } else {
    icon2.classList.remove("fa-minus");
    icon2.classList.add("fa-plus");

    document.getElementById("answer-2").classList.remove("show-answer");
  }
});
document.getElementById("btn-open-3").addEventListener("click", () => {
  if (icon3.classList.contains("fa-plus")) {
    document.getElementById("answer-3").classList.add("show-answer");
    document.getElementById("answer-2").classList.remove("show-answer");
    document.getElementById("answer-1").classList.remove("show-answer");
    icon3.classList.remove("fa-plus");
    icon3.classList.add("fa-minus");
    icon1.classList.remove("fa-minus");
    icon1.classList.add("fa-plus");
    icon2.classList.remove("fa-minus");
    icon2.classList.add("fa-plus");
  } else {
    icon3.classList.remove("fa-minus");
    icon3.classList.add("fa-plus");
    document.getElementById("answer-3").classList.remove("show-answer");
  }
});
