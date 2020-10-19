$(window).scroll(function(){
  //Ocultar o mostrar el NAV
  if($(window).scrollTop() > 600) {
    $('#nav').fadeIn(300);
  }
  else {
    $('#nav').fadeOut(300);
  }

  //Ocultar o mostrar el boton de ir arriba
  if($(window).width() > 767) {
    if ($(this).scrollTop() > 600) {
      $('.scroll-up').fadeIn(300);
    } else {
      $('.scroll-up').fadeOut(300);
    }		
  }

});

//Funciones para el slider vertical de texto
var vsOpts = {
  $slides: $('.v-slide'),
  $list: $('.v-slides'),
  duration: 10,
  lineHeight: 50
}

var vSlide = new TimelineMax({
  paused: true,
  repeat: -1
})

vsOpts.$slides.each(function(i) {
  vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
    y: i * -1 * vsOpts.lineHeight,
    ease: Elastic.easeOut.config(1, 0.4)
  })
})
vSlide.play()

//Funcion de cambio de imagen cuando se hizo hover en ella
function hover(element) {
  var element_old = element
  if(element.id=="msg-info" || element.id=="fb-info" || element.id=="cal-info" || element.id=="twt-info" || element.id=="btnleft"){
    element = element.getElementsByTagName('img')[0];
  }

  element.setAttribute('src', 'assets/img/'+element_old.id+'2.png');
}

//Funcion de cambio de imagen cuando se hizo hover en ella
function unhover(element) {
  var element_old = element
  if(element.id=="msg-info" || element.id=="fb-info" || element.id=="cal-info" || element.id=="twt-info" || element.id=="btnleft"){
    element = element.getElementsByTagName('img')[0];
  }

  element.setAttribute('src', 'assets/img/'+element_old.id+'.png');
}

//Funcion para que al subir aplique una animacion y no suba de golpe
const button = document.querySelector('#scroll');
button.addEventListener('click', event => {
  $("html, body").animate({ scrollTop: "0" }, 1000); 
});

