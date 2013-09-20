
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
    imageData.data[ pixel + 3] = 255;
  }

  function shouldReplicate( imageData, pixel )
  {
    var result = 0;
    if ( imageData.data[ pixel + 3 ] == 255 )
    {
      result += 1;
    }
    if ( imageData.data[ pixel - 1 ] == 255 )
    {
      result += 2;
    }
    if ( imageData.data[ pixel + 7 ] == 255 )
    {
      result += 4;
    }

    return result;

}

  function colorRow( imageData, row, width )
  {
    actual_width = width * 4;
    for ( var i = 0; i < actual_width; i += 4 )
    {
      switch (shouldReplicate( imageData, pixel( row - 1, width )  + i))
      {
        case 0:
          if ( rule_0 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
        case 1:
          if ( rule_1 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
        case 2:
          if ( rule_2 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
        case 3:
          if ( rule_3 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
        case 4:
          if ( rule_4 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
        case 5:
          if ( rule_5 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
        case 6:
          if ( rule_6 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
        case 7:
          if ( rule_7 )
          {
            colorPixel( imageData, pixel( row, width ) + i );
          }
          break;
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

  $(".commander").click(makeWolfram );



});
