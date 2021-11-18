const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
$("html, body").animate({ scrollTop: 0 });
});


ScrollReveal().reveal('.headline', { interval: 16, reset: true, delay: 1050});



