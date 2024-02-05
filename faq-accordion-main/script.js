const plusIcons = document.querySelectorAll(".plus");
const minusIcons = document.querySelectorAll(".cross");
const paragraphs = document.querySelectorAll(".paragraph");

// for loop
for (let i = 0; i < plusIcons.length; i++) {
  plusIcons[i].addEventListener("click", function () {
    plusIcons[i].classList.toggle("hidden");
    minusIcons[i].classList.toggle("hidden");
    paragraphs[i].classList.toggle("hidden");
  });
}
