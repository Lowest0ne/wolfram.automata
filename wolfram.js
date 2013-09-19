function colorRow( imageData, row, width )
{
  for ( var i = 0; i < width * 4; i += 4 )
  {
    imageData.data[ ( row * width * 4) + i + 0 ] = 0;
    imageData.data[ ( row * width * 4) + i + 1 ] = 0;
    imageData.data[ ( row * width * 4) + i + 2 ] = 0;
    imageData.data[ ( row * width * 4) + i + 3 ] = 255;
  }

}

function makeWolfram()
{
  var canvas    = document.getElementById("wolfram");
  var width     = canvas.getAttribute('width');
  var height    = canvas.getAttribute('height');
  var context   = canvas.getContext("2d");
  var imageData = context.createImageData(width, height);

  for ( var row = 0; row < height; row += 1 )
  {
    colorRow( imageData, row, width );
  }

  context.putImageData(imageData,0,0);
}
