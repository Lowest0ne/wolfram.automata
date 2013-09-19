
$(function() {
  var rule_0 = false;
  var rule_1 = false;
  var rule_2 = false;
  var rule_3 = false;
  var rule_4 = false;
  var rule_5 = false;
  var rule_6 = false;
  var rule_7 = false;

  function pixel( row, column )
  {
    return row * column * 4;
  }

  function colorPixel( imageData, pixel )
  {
    imageData.data[ pixel ]    = 0;
    imageData.data[ pixel + 1] = 0;
    imageData.data[ pixel + 2] = 0;
    imageData.data[ pixel + 3] = 255;
  }

  function shouldReplicate( imageData, pixel )
  {
    if ( rule_0 )
    {
      return imageData.data[ pixel + 3 ] == 255;
    }
    else
    {
      return imageData.data[ pixel - 1 ] == 255;
    }
  }


  function colorRow( imageData, row, width )
  {
    actual_width = width * 4;
    for ( var i = 0; i < actual_width; i += 4 )
    {
      if ( shouldReplicate( imageData, pixel( row - 1, width )  + i) )
      {
        colorPixel( imageData, pixel( row, width ) + i );
      }
    }

  }

  function makeWolfram()
  {
    var canvas    = document.getElementById("wolfram");
    var width     = canvas.getAttribute('width');
    var height    = canvas.getAttribute('height');
    var context   = canvas.getContext("2d");
    var imageData = context.createImageData(width, height);

    rule_0 = $('.rule_0').is(':checked');
    rule_1 = $('.rule_1').is(':checked');
    rule_2 = $('.rule_2').is(':checked');
    rule_3 = $('.rule_3').is(':checked');
    rule_4 = $('.rule_4').is(':checked');
    rule_5 = $('.rule_5').is(':checked');
    rule_6 = $('.rule_6').is(':checked');
    rule_7 = $('.rule_7').is(':checked');

    imageData.data[width * 2 + 3] = 255;
    for ( var row = 1; row < height; row += 1 )
    {
      colorRow( imageData, row, width );
    }

    context.putImageData(imageData,0,0);
  }

  $(".wolfram_button").click(makeWolfram );



});
