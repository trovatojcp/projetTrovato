'use strict'; // utilisation du mode 'strict' de javascript

$(document).ready(function () {

/* Menu Hamburger */
// cacher la section nav

if (window.matchMedia("(max-width: 480px)").matches) { // applique le script aux media queries jusqu'à 480px inclus
    $("nav").hide();
    $('.fas.fa-bars').show()
  
    $(".fas.fa-bars").click(function () {
      // Si la section est fermée, on l'ouvre :
      if ($("nav:hidden").length != 0) {
        $("nav").slideDown("normal");
        // on ajoute la classe pour rotation font-awesome
        $(this).addClass('rotated');
      }
      // Si la section est ouverte, on la ferme :
      else {
        $("nav").slideUp("normal");
        // on supprime la classe pour rotation font-awesome
        $(this).removeClass('rotated');
      }
    });
  }

  /* script slider */

  // variable qui contient toutes les <figures>
  const figure = document.querySelectorAll('.figureSlider');

  let i = 0;

  // Fonction Next

  function next() {
      figure[i].classList.remove('active');
      i++;
      if (i >= figure.length) {
          i = 0;
      }
      figure[i].classList.add('active');
  }

  // Interval slider

  window.setInterval(next, 5000);

});