  $(document).ready(function(){
    $('#id1').click(function(){
      // Remueve la clase 'active' de todos los párrafos
      $('.texto div').removeClass('activo');
      // Agrega la clase 'active' al párrafo con el id 'par1'
      $('.par1').addClass('activo');
    });
  });

  $(document).ready(function(){
    $('#id2').click(function(){
      // Remueve la clase 'active' de todos los párrafos
      $('.texto div').removeClass('activo');
      // Agrega la clase 'active' al párrafo con el id 'par1'
      $('.par2').addClass('activo');
    });
  });

  $(document).ready(function(){
    $('#id3').click(function(){
      // Remueve la clase 'active' de todos los párrafos
      $('.texto div').removeClass('activo');
      // Agrega la clase 'active' al párrafo con el id 'par1'
      $('.par3').addClass('activo');
    });
  });
  
  /* Hover del subbody */
  $(document).ready(function() {
    $('.subbody.hover').hover(
        function() {
            // Cuando el mouse entra en el elemento .subbody.hover
            $(this).closest('.cont2').css('flex', '2');
            $(this).find('p').css({
                'height': '100%',
                'margin-top': '0px',
                'padding-block': '30px',
                'color': 'inherit'
            });
        },
        function() {
            // Cuando el mouse sale del elemento .subbody.hover
            $(this).closest('.cont2').css('flex', '1'); // Vuelve al valor original
            $(this).find('p').css({
                'height': '',
                'margin-top': '',
                'padding-block': '',
                'color': ''
            });
        }
    );
});