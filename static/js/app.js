const hamburger = document.querySelector(".hamburger");
const navBarLinks = document.querySelector(".navBarLinks");
const links = document.querySelectorAll(".navBarLinks li");

hamburger.addEventListener("click", () => {
    navBarLinks.classList.toggle("open");
    hamburger.classList.toggle("change");
});


$('.close-x').click(function () {
    $(this).parent().fadeOut();
    $(this).parent().parent().fadeOut();
});


if ($(document).scrollTop() > 0) {
    $('.myNavbar').css('box-shadow', '0 3px 15px rgba(0,0,0,0.65)');
    $('.myNavbar').css('border-bottom', 'none');
}

$(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        $('.myNavbar').css('box-shadow', '0 3px 15px rgba(0,0,0,0.65)');
        $('.myNavbar').css('border-bottom', 'none');
    } else {
        $('.myNavbar').css('box-shadow', 'none');
        $('.myNavbar').css('border-bottom', '1px solid black');
    }
});