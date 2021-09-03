const hamburger_button = document.querySelector("#js-hamburger-button");
const navbar_bottom = document.querySelector("#js-navbar-bottom");

hamburger_button.addEventListener("click", function(e) {
    console.log('clicked!');
    navbar_bottom.classList.toggle("hidden");

});

console.log('Loaded');