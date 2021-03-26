const hamburger = document.querySelector(".hamburger");
const navBarLinks = document.querySelector(".navBarLinks");
const links = document.querySelectorAll(".navBarLinks li");

hamburger.addEventListener("click", () => {
    navBarLinks.classList.toggle("open");
    hamburger.classList.toggle("change");
});


// jquery
$('.close-x').click(function () {
    $(this).parent().fadeOut();
    $(this).parent().parent().fadeOut();
});