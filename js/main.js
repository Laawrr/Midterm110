$(document).ready(function () {
    $(".menu-toggle").click(function () {
      $(".menu-toggle").toggleClass("menu-open");
      $(".menu").toggleClass("active");
    });
    $(".nav-link").click(function () {
      $(".menu-toggle").toggleClass("menu-open");
      $(".menu").toggleClass("active");
    });
});    

document.addEventListener("DOMContentLoaded", function() {
    // Add fade-in effect to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

var textWrapperMl3 = document.querySelector('.ml3');
var textWrapperLead = document.querySelector('.lead');

textWrapperMl3.innerHTML = textWrapperMl3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperLead.innerHTML = textWrapperLead.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)  
});

anime.timeline({loop: true})
  .add({
    targets: '.lead .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.lead .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
