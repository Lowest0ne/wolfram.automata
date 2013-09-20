
$(function() {
  var canvas  = document.getElementById("wolfram");
  var width   = canvas.getAttribute('width');
  var height  = canvas.getAttribute('height');
  var context = canvas.getContext("2d");
  var image   = context.createImageData(width, height);

  var rule_array = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];

  function pixelAt( row, offset )
  {
    return ( row * width * 4 ) + offset;
  }

  function generateRule( pixel )
  {
    var result = 0;

    result += ( image.data[ pixel + 3 ] ) ? 1 : 0;
    result += ( image.data[ pixel - 1 ] ) ? 2 : 0;
    result += ( image.data[ pixel + 7 ] ) ? 4 : 0;

    return result;
   }

  function genColor( rule )
  {
    return ( rule ? 255 : 0 );
  }

  function colorRow( row )
  {
    // the width is the actual pixel width
    // time four because each pixel is RGBA
    for ( var i = 0; i < width * 4; i += 4 )
    {
      // what is the combination from the last row?
      result = generateRule( pixelAt( row - 1, i ) )

      // apply the selected color to the current pixel
      // pixels are zero (RGBA) by default, we only need 0xFF alpha
      image.data[ pixelAt( row, i ) + 3 ] = genColor(rule_array[ result ]);
    }
  }

  function celluarAutomata()
  {
    for (var row = 1; row < height; row += 1 )
    {
      colorRow( row );
    }
  }

  function makeWolfram()
  {
    // reload the canvas in case of size change
    width  = canvas.getAttribute('width');
    height = canvas.getAttribute('height');
    image  = context.createImageData(width, height);

    // figure out which rules result in black
    rule_array = [
      $('.rule_0').is(':checked'),
      $('.rule_1').is(':checked'),
      $('.rule_2').is(':checked'),
      $('.rule_3').is(':checked'),
      $('.rule_4').is(':checked'),
      $('.rule_5').is(':checked'),
      $('.rule_6').is(':checked'),
      $('.rule_7').is(':checked')
    ];

    // seed the first row
    image.data[width * 2 + 3] = 255;

    // run the loops
    celluarAutomata();

    context.putImageData(image,0,0);
  }

  $(".commander").click(makeWolfram);
});
