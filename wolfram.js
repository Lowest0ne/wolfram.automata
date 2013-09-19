function pixel( row, column )
{
  return row * column * 4;
}

function colorPixel( imageData, pixel )
{
  imageData.data[ pixel ] = 0;
  imageData.data[ pixel + 1] = 0;
  imageData.data[ pixel + 2] = 0;
  imageData.data[ pixel + 3] = 255;
}


function colorRow( imageData, row, width )
{
  actual_width = width * 4
  for ( var i = 0; i < actual_width; i += 4 )
  {
    if ( imageData.data[ pixel( row - 1, width )  + i + 3] == 0 )
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

  imageData.data[width * 2 + 3] = 255;
  for ( var row = 1; row < height; row += 1 )
  {
    colorRow( imageData, row, width );
  }

  context.putImageData(imageData,0,0);
}
