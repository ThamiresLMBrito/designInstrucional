function start_components() {

  // Injeta o html do componente "Home".
  $.get('components/home/home.html', function (response) {
    $('.home').html(response);
  });

  // Injeta o html do componente "Módulos".
  $.get('components/modulos/modules.html', function (response) {
    $('.modules').html(response);
  });

  // Injeta o html do componente "Menu".
  $.get('components/menu/menu.html', function (response) {
    $('.menu').html(response);
  });

  // Injeta o html do componente "Score".
  $.get('components/score/score.html', function (response) {
    $('.score').html(response);
  });

  // Injeta o html do componente "Tools".
  $.get('components/ferramentas/tools.html', function (response) {
    $('.tools').html(response);
  });

  // Injeta o html do componente "Video".
  $.get('components/video/video.html', function (response) {
    $('.video').html(response);
  });

  // Injeta o html do componente "notas".
  $.get('components/notes/notes.html', function (response) {
  $('.notes').html(response);
  });


  // Injeta o html do componente "save itens".
  $.get('components/save/save.html', function (response) {
  $('.save').html(response);
   });

     // Injeta o html do componente "config".
  $.get('components/configStart/config.html', function (response) {
    $('.config').html(response);
     });

}


