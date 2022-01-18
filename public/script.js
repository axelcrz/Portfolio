// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente, je m'appelle Axel", "Après avoir eu l'obtention du baccalauréats, j'ai décider d'intégrer une école qui forme sur un BUT, la formations proposé est Réseaux et Télécommunication, j'apprends a coder du langage C, HTML, mais aussi contruire un réseaux, je m'éxerce encore en anglais. Cette formations est bénéfique car elle est assez général pour apprendre certaines compétences. Je suis étudiant mais aussi j'ai un travail a coter, les weeks-end je suis entraîneur de Basket-Ball pour améliorer mon sociable et c'est une passion."],
  typeSpeed: 20,
});
  
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();