$(function(){
  $('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  var valeur = 0;
  // on appelle une fonction '.click' avec l'id #clickMe rattaché au bouton
  $('.add').click(function () {
    // La méthode '.val()' permet de récupérer ou de modifier une valeur (récupère la valeur du nombre de clique)
    //  on passe l'incrémentation de 'valeur' à cette méthode en argument
    $('.quantity').html(++valeur);
  });
  // on appelle une fonction '.click' avec l'id #clickMe rattaché au bouton
  $('.supp').click(function () {
    if ($('.quantity').html() > 0) {
      $('.quantity').html(--valeur);
    }
  });
});
